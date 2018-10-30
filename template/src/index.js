var getDayFormat = function(date){
  if(!date) date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return year+'-'+month+'-'+day;
};

var SheetService = {
  createInitialFile:function(prefix) {
    var fileName = prefix + ' ' + getDayFormat();
    var ss = SpreadsheetApp.create(fileName);
    var range = ss.getRange('A1');
    range.setValue('Hello, clasp!');
    return ss;
  }
}

function createNewFile(){
  var ss = SheetService.createInitialFile('New file');
  ss.getRange('A2').setValue('Happy gas!');
}
