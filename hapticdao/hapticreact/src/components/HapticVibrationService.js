
class HapticVibrationService {

      async handleVibrate() {
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
        navigator.vibrate([100, 200, 150]);
        console.log("Vibration occurred");
        return true;
    }

}

export default HapticVibrationService;