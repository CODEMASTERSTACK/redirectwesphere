const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Simple oscillator beep for now, can be replaced with real files
const playTone = (freq, type, duration) => {
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
};

export const playHoverSound = () => {
    playTone(440, 'sine', 0.1);
};

export const playClickSound = () => {
    playTone(880, 'triangle', 0.15);
};
