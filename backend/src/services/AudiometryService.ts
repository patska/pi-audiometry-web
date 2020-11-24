import SerialPort from "serialport";
import Readline from "@serialport/parser-readline";

class AudiometryService {
  public async execute() {
    const resultPromise =  new Promise(function(resolve, reject) {
      var lineArray = [];
      var result = [];
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
          result.push({
            frequency: element.split(" - ")[0],
            leftEar: element.split(" - ")[1],
            rightEar: element.split(" - ")[2]
          });
        });
        resolve(result);
      }
      
    });

    return resultPromise;
  }
}

export default AudiometryService;
