import angular from "angular";
import "./styles.scss";

angular.module("myApp", []).controller("myController", function () {
  this.clinics = [
    { name: "Clinic Overwatch", config: { duration: 5, maxHours: 8 } },
    { name: "Clinic Onix", config: { duration: 35, maxHours: 8 } },
    { name: "Clinic Bloom", config: { duration: 15, maxHours: 2 } },
    { name: "Clinic Odd", config: { duration: 13, maxHours: 3 } },
    { name: "Clinic 24hrs", config: { duration: 13, maxHours: 24 } }
  ];
});
