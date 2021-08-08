import angular from "angular";

/**
 * @param {Object} config - Const system configuration
 * @param {Number} config.sysMaxHours - System max hours limit
 * -----------------------------------------------------------
 * @param {Object} clinic - Binding clinic.
 * @param {String} clinic.name
 * @param {Object} clinic.config
 * @param {Object} clinic.config.duration
 * @param {Object} clinic.config.maxHours
 */

angular
  .module("myApp")
  .constant("config", { sysMaxHours: 8 })
  .component("clinicCard", {
    templateUrl: "src/components/clinic-card/clinic-card.component.html",
    styleUrls: ["src/components/clinic-card/clinic-card.component.css"],
    bindings: {
      clinic: "="
    },
    controller: [
      "config",
      function (config) {
        this.$onInit = function () {
          // check maxHours first
          this.clinic.config.maxHours = this.validateMaxHours(
            this.clinic.config.maxHours
          );
          // init variables
          this.notAvailable = false;
          this.newConfig = angular.copy(this.clinic.config);
          this.isConfigOpen = false;
          this.isEditing = false;
          this.timeslot = {
            listAvailable: [],
            selected: ""
          };

          // init timeslot
          this.initTimeslot();
        };

        this.toggleView = function (config) {
          this[config] = !this[config];
        };

        this.toggleAllViews = function () {
          this.toggleView("isEditing");
          this.toggleView("isConfigOpen");
        };

        this.initTimeslot = function () {
          this.timeslot.selected = "";
          this.timeslot.listAvailable = this.generateTimeslotList(
            this.clinic.config.maxHours,
            this.clinic.config.duration
          );
        };

        this.save = function (newConfig) {
          newConfig.maxHours = this.validateMaxHours(newConfig.maxHours);
          newConfig.duration = this.validateDuration(newConfig.duration);
          this.toggleAllViews();
          this.clinic.config = angular.copy(newConfig);
          this.initTimeslot();
        };

        this.cancel = function () {
          this.toggleAllViews();
          this.newConfig = angular.copy(this.clinic.config);
        };

        // Validations
        this.validateMaxHours = function (maxHours) {
          return maxHours > config.sysMaxHours ? config.sysMaxHours : maxHours;
        };
        this.validateDuration = function (duration) {
          return duration <= 0 ? 1 : duration;
        };

        /**
         * Generate Timeslot List
         * @param {Number} _maxHors - Max Hours
         * @param {Number} _duration - Duration
         * @return {Array} [{label:  "1 hour and 10 minutes", minutes:  70},...]
         */
        this.generateTimeslotList = function (_maxHors, _duration) {
          var totalMinutes = _maxHors * 60;
          var listLength = Math.floor(totalMinutes / _duration);
          var timeslotList = Array.from(Array(listLength).keys());

          !timeslotList.length
            ? (this.notAvailable = true)
            : (this.notAvailable = false);

          return timeslotList.map(function (index) {
            var aux = (index + 1) * _duration;
            return this.convertMinToTime(aux);
          }, this);
        };

        /**
         * Convert Minutes to Time
         * @param {Number} _minutes - Minutes
         * @return {Object} {label:  "1 hour and 10 minutes", minutes:  70}
         */
        this.convertMinToTime = function (_minutes) {
          var hr = _minutes / 60;
          var round_hrs = Math.floor(hr);
          var mins = (hr - round_hrs) * 60;
          var round_mins = Math.round(mins);
          return {
            label: this.generateTimeslotLabel(round_hrs, round_mins),
            minutes: _minutes
          };
        };

        /**
         * Generate timeslot label
         * @param {Number} _hr - Hours (rounded)
         * @param {Number} _min - Minutes (rounded)
         * @return {String} "1 hour and 10 minutes"
         */
        this.generateTimeslotLabel = function (_hr, _min) {
          var lb = "";
          // if (_hr < 0 || _min < 0 || (_hr === 0 && _min === 0)) {
          if (_hr >= 0 || _min >= 0 || (_hr > 0 && _min > 0)) {
            if (_hr > 0) lb += _hr + (_hr > 1 ? " hours" : " hour");
            if (_min > 0) {
              if (_hr) lb += " and ";
              lb += _min + (_min > 1 ? " minutes" : " minute");
            }
          }
          return lb;
        };
      }
    ]
  });
