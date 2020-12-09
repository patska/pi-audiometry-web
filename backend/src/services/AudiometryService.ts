import SerialPort from "serialport";
import Readline from "@serialport/parser-readline";
import { formatDistanceToNow } from "date-fns";

class AudiometryService {
  public async execute() {
    const resultPromise =  new Promise(function(resolve, reject) {
      var lineArray = [];
      var leftResult = [];
      var righResult = [];
      var results = [];
      var exitCode = "EXIT0";
      const port = new SerialPort("COM3", {
        baudRate: 9600
      });
      console.log('Entrou!');
      const parser = new Readline();
      port.pipe(parser);

      parser.on("data", (line: string) => {
        console.log('Entrou line!');
        if (line.trim() == exitCode) printResult(lineArray);
        line = line.replace(/\r/g, "");
        lineArray.push(line);

      });

      function printResult(lineArray: any[]) {
        port.close();
        lineArray.forEach(element => {
          leftResult.push([
            parseInt(element.split(" - ")[0]),
            parseInt(element.split(" - ")[1]),
          ]);
          righResult.push([
            parseInt(element.split(" - ")[0]),
            parseInt(element.split(" - ")[2]),
          ]);
        });
        results.push(leftResult);
        results.push(righResult);
        results.push({
          "examDate": Date.now()
        })
        resolve(results);
      }
      
    });

    return resultPromise;
  }
}

export default AudiometryService;
