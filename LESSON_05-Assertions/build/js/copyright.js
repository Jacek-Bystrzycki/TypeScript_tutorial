"use strict";
//1st solution
// const currentYear: string = new Date().getFullYear().toString();
// const yearContainer = document.getElementById('year') as HTMLSpanElement;
// yearContainer.textContent = currentYear;
//2nd solution
const currentYear = new Date().getFullYear();
const yearContainer = document.getElementById('year');
yearContainer.textContent = currentYear.toString();
