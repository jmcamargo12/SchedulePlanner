setInterval(() => {
  $("#currentDay").text(Date($.now()));
}, 1000);

function saveData() {
  localStorage.setItem("time12pm", $("#firstText").val());
  console.log(localStorage);
  localStorage.setItem("time1pm", $("#secondText").val());
  console.log(localStorage);
  localStorage.setItem("time2pm", $("#thirdText").val());
  console.log(localStorage);
  localStorage.setItem("time3pm", $("#fourthText").val());
  console.log(localStorage);
  localStorage.setItem("time4pm", $("#fiveText").val());
  console.log(localStorage);
  localStorage.setItem("time5pm", $("#sixText").val());
  console.log(localStorage);
  localStorage.setItem("time6pm", $("#seventhText").val());
  console.log(localStorage);
  localStorage.setItem("time7pm", $("#eightText").val());
  console.log(localStorage);
  localStorage.setItem("time8pm", $("#ninthText").val());
  console.log(localStorage);
  localStorage.setItem("time9pm", $("#tenthText").val());
  console.log(localStorage);
  localStorage.setItem("time10pm", $("#eleventhText").val());
  console.log(localStorage);
  localStorage.setItem("time11pm", $("#twelfthText").val());
  console.log(localStorage);
}

function loadData() {
  $("#currentDay").text(Date($.now()));
  $("#firstText").val(localStorage.getItem("time12pm"));
  $("#secondText").val(localStorage.getItem("time1pm"));
  $("#thirdText").val(localStorage.getItem("time2pm"));
  $("#fourthText").val(localStorage.getItem("time3pm"));
  $("#fiveText").val(localStorage.getItem("time4pm"));
  $("#sixText").val(localStorage.getItem("time5pm"));
  $("#seventhText").val(localStorage.getItem("time6pm"));
  $("#eightText").val(localStorage.getItem("time7pm"));
  $("#ninthText").val(localStorage.getItem("time8pm"));
  $("#tenthText").val(localStorage.getItem("time9pm"));
  $("#eleventhText").val(localStorage.getItem("time10pm"));
  $("#twelfthText").val(localStorage.getItem("time11pm"));
}
