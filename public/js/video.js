class VideoConsultation {
    constructor() {
        this.hmsSDK = null;
        this.isJoined = false;
        this.localPeer = null;
        this.remotePeers = new Map();
        
        this.joinBtn = document.getElementById("joinBtn");
        this.videoContainer = document.getElementById("video-container");
        this.statusDiv = document.getElementById("status");
        
        this.init();
    }

    init() {
        if (this.joinBtn) {
            this.joinBtn.addEventListener("click", () => this.joinConsultation());
        }
    }

    updateStatus(message, isError = false) {
        if (this.statusDiv) {
            this.statusDiv.textContent = message;
            this.statusDiv.className = isError ? 'status error' : 'status success';
        }
        console.log(message);
    }

    async joinConsultation() {
        try {
            this.updateStatus("Getting authentication token...");
            
            // 1. Get token from backend
            const response = await fetch("/video/token", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user_id: "user_" + Date.now(),
                    role: "patient", // or "doctor" based on user type
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            if (!data.token) {
                throw new Error("No token received from server");
            }

            this.updateStatus("Initializing video consultation...");
              console.log("Global HMSLive object:", window.HMSLive);
        if (window.HMSLive) {
            console.log("HMSLive.HMSReactiveStore:", window.HMSLive.HMSReactiveStore);
            console.log("Type of HMSLive.HMSReactiveStore:", typeof window.HMSLive.HMSReactiveStore);
        }
            // 2. Initialize 100ms SDK
           const HMSReactiveStore = window.HMSReactiveStore;




            this.hmsSDK = new HMSReactiveStore();

            // 3. Set up event listeners
            this.setupEventListeners();

            // 4. Join the room
            const authToken = data.token;
            const userName = "Patient " + Math.floor(Math.random() * 1000);

            await this.hmsSDK.getActions().join({
                authToken,
                userName,
                settings: {
                    isAudioMuted: false,
                    isVideoMuted: false
                }
            });

            this.updateStatus("Successfully joined consultation!");
            this.joinBtn.textContent = "Leave Consultation";
            this.joinBtn.onclick = () => this.leaveConsultation();

        } catch (error) {
            console.error("❌ Error joining consultation:", error);
            this.updateStatus(`Error: ${error.message}`, true);
        }
    }

    setupEventListeners() {
        const hmsActions = this.hmsSDK.getActions();
        const hmsStore = this.hmsSDK.getStore();

        // Listen for connection state changes
        hmsStore.subscribe((state) => state.room.roomState, (roomState) => {
            console.log("Room state:", roomState);
            if (roomState === 'Connected') {
                this.isJoined = true;
                this.updateStatus("Connected to consultation room");
            }
        });

        // Listen for local peer updates
        hmsStore.subscribe((state) => state.localPeer, (localPeer) => {
            if (localPeer) {
                this.localPeer = localPeer;
                this.renderLocalVideo(localPeer);
            }
        });

        // Listen for remote peers
        hmsStore.subscribe((state) => state.remotePeers, (remotePeers) => {
            remotePeers.forEach(peer => {
                if (!this.remotePeers.has(peer.id)) {
                    this.remotePeers.set(peer.id, peer);
                    this.renderRemoteVideo(peer);
                }
            });
        });

        // Listen for track updates
        hmsStore.subscribe((state) => state.tracks, (tracks) => {
            Object.values(tracks).forEach(track => {
                if (track.type === 'video' && track.enabled) {
                    this.updateVideoTrack(track);
                }
            });
        });

        // Listen for errors
        hmsStore.subscribe((state) => state.errors, (errors) => {
            if (errors && errors.length > 0) {
                const latestError = errors[errors.length - 1];
                this.updateStatus(`Error: ${latestError.message}`, true);
            }
        });
    }

    renderLocalVideo(localPeer) {
        const videoTrack = localPeer.videoTrack;
        if (videoTrack && videoTrack.enabled) {
            let videoElement = document.getElementById('local-video');
            
            if (!videoElement) {
                videoElement = document.createElement('video');
                videoElement.id = 'local-video';
                videoElement.autoplay = true;
                videoElement.muted = true;
                videoElement.playsInline = true;
                
                const container = document.createElement('div');
                container.className = 'video-wrapper local';
                container.appendChild(videoElement);
                
                const label = document.createElement('div');
                label.className = 'video-label';
                label.textContent = 'You';
                container.appendChild(label);
                
                this.videoContainer.appendChild(container);
            }

            this.hmsSDK.getActions().attachVideo(videoTrack.id, videoElement);
        }
    }

    renderRemoteVideo(remotePeer) {
        const videoTrack = remotePeer.videoTrack;
        if (videoTrack && videoTrack.enabled) {
            let videoElement = document.getElementById(`remote-video-${remotePeer.id}`);
            
            if (!videoElement) {
                videoElement = document.createElement('video');
                videoElement.id = `remote-video-${remotePeer.id}`;
                videoElement.autoplay = true;
                videoElement.playsInline = true;
                
                const container = document.createElement('div');
                container.className = 'video-wrapper remote';
                container.appendChild(videoElement);
                
                const label = document.createElement('div');
                label.className = 'video-label';
                label.textContent = remotePeer.name || 'Remote User';
                container.appendChild(label);
                
                this.videoContainer.appendChild(container);
            }

            this.hmsSDK.getActions().attachVideo(videoTrack.id, videoElement);
        }
    }

    updateVideoTrack(track) {
        const videoElement = document.querySelector(`video[data-track-id="${track.id}"]`);
        if (videoElement) {
            if (track.enabled) {
                videoElement.style.display = 'block';
            } else {
                videoElement.style.display = 'none';
            }
        }
    }

    async leaveConsultation() {
        try {
            if (this.hmsSDK && this.isJoined) {
                await this.hmsSDK.getActions().leave();
                this.updateStatus("Left consultation room");
            }
            
            // Clean up UI
            this.videoContainer.innerHTML = '';
            this.joinBtn.textContent = "Join Consultation";
            this.joinBtn.onclick = () => this.joinConsultation();
            this.isJoined = false;
            this.remotePeers.clear();
            
        } catch (error) {
            console.error("Error leaving consultation:", error);
            this.updateStatus(`Error leaving: ${error.message}`, true);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new VideoConsultation();
});