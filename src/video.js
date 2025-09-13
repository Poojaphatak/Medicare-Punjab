// src/video.js
import {
  HMSReactiveStore,
  selectPeers,
  selectIsConnectedToRoom,
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled
} from "@100mslive/hms-video-store";

// init SDK store & actions
const hmsManager = new HMSReactiveStore();
hmsManager.triggerOnSubscribe();
const hmsStore = hmsManager.getStore();
const hmsActions = hmsManager.getHMSActions();

// UI elements (make sure these IDs exist in the EJS view)
const nameInput = document.getElementById('user-name');
const roleSelect = document.getElementById('user-role');
const joinBtn = document.getElementById('join-btn');
const leaveBtn = document.getElementById('leave-btn');
const peersContainer = document.getElementById('peers-container');
const muteAudioBtn = document.getElementById('mute-audio');
const muteVideoBtn = document.getElementById('mute-video');

// helper
function createVideoElement() {
  const v = document.createElement('video');
  v.autoplay = true;
  v.playsInline = true;
  v.muted = false;
  v.width = 320;
  v.height = 240;
  return v;
}

async function fetchToken(userId, role) {
  const r = await fetch('/video/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: userId, role })
  });
  if (!r.ok) throw new Error('Token fetch failed');
  const data = await r.json();
  return data.token;
}

joinBtn.addEventListener('click', async () => {
  try {
    const name = nameInput.value.trim() || `guest_${Date.now()}`;
    const role = roleSelect.value || 'patient';
    joinBtn.disabled = true;
    joinBtn.textContent = 'Joining...';

    const token = await fetchToken(name, role);

    // join using the token (token contains room_id)
    await hmsActions.join({ userName: name, authToken: token });

    joinBtn.style.display = 'none';
    leaveBtn.style.display = 'inline-block';
  } catch (err) {
    console.error(err);
    alert('Failed to join: ' + (err.message || err));
    joinBtn.disabled = false;
    joinBtn.textContent = 'Join';
  }
});

leaveBtn.addEventListener('click', async () => {
  await hmsActions.leave();
  peersContainer.innerHTML = '';
  joinBtn.style.display = 'inline-block';
  leaveBtn.style.display = 'none';
  joinBtn.disabled = false;
  joinBtn.textContent = 'Join';
});

// Render peers whenever peer list changes
hmsStore.subscribe(renderPeers, selectPeers);

function renderPeers() {
  peersContainer.innerHTML = '';
  const peers = hmsStore.getState(selectPeers) || [];
  peers.forEach(peer => {
    // Only show peers that have video track
    if (peer.videoTrack) {
      const tile = document.createElement('div');
      tile.className = 'peer-tile';
      const v = createVideoElement();
      const nameEl = document.createElement('div');
      nameEl.textContent = peer.name;
      nameEl.className = 'peer-name';
      // attach video track to the video element
      hmsActions.attachVideo(peer.videoTrack, v);
      tile.appendChild(v);
      tile.appendChild(nameEl);
      peersContainer.appendChild(tile);
    }
  });
}

// Mute/unmute local audio/video
muteAudioBtn.onclick = () => {
  const isEnabled = hmsStore.getState(selectIsLocalAudioEnabled);
  hmsActions.setLocalAudioEnabled(!isEnabled);
  muteAudioBtn.textContent = isEnabled ? 'Unmute' : 'Mute';
};

muteVideoBtn.onclick = () => {
  const isEnabled = hmsStore.getState(selectIsLocalVideoEnabled);
  hmsActions.setLocalVideoEnabled(!isEnabled);
  muteVideoBtn.textContent = isEnabled ? 'Show Video' : 'Hide Video';
};
