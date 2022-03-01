class AlarmClock {
  constructor() {
    this.timerId = null;
    this.alarmCollection = [];
  }

  addClock(time, callback, id) {
    if (id == undefined) {
      throw new Error("No such id");
    }
    if (this.alarmCollection.some(item => item.id === id)) {
      console.error('This alarm is already created');
      return;
    }
    this.alarmCollection.push({
      id,
      time,
      callback
    });
  }


  removeClock(id) {
    const beforeRemoveClock = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
    return beforeRemoveClock != this.alarmCollection;
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().slice(0, -3);
  }

  start() {
    function checkClock(alarm) {
      console.log(alarm.time)
      if (this.getCurrentFormattedTime == alarm.time) {
        alarm.callback();
      }
    }
    checkClock = checkClock.bind(this.start)
    if (!this.timerId) {
      setInterval(() => {
        this.alarmCollection.forEach((alarm) => checkClock(alarm));
      }, 1000);
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach(item => console.log(`Будильник №${alarm.id} установлен на ${alarm.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  };
}
