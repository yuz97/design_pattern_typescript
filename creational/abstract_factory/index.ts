enum ComputerType {
   PC = "pc",
   LAPTOP = "laptop",
}

abstract class Computer {
   protected type: ComputerType;
   protected monitor: string;

   constructor(type: ComputerType, monitor: string) {
      this.type = type;
      this.monitor = monitor;
   }

   abstract getModel(): string;
}

class PC extends Computer {
   constructor(monitor: string) {
      super(ComputerType.PC, monitor);
   }

   getModel(): string {
      return `${this.type} with ${this.monitor}`;
   }
}

class Laptop extends Computer {
   constructor(monitor: string) {
      super(ComputerType.LAPTOP, monitor);
   }
   getModel(): string {
      return `${this.type} with ${this.monitor}`;
   }
}

enum MonitorType {
   LED = "led",
   IPS = "ips",
}

class LEDComputerType {
   static buildComputer(type: ComputerType): Computer {
      switch (type) {
         case ComputerType.PC:
            return new PC(MonitorType.LED);
         case ComputerType.LAPTOP:
            return new PC(MonitorType.LED);
         default:
            throw new Error("type not found");
      }
   }
}

class IPSComputerType {
   static buildComputer(type: ComputerType): Computer {
      switch (type) {
         case ComputerType.PC:
            return new PC(MonitorType.IPS);
         case ComputerType.LAPTOP:
            return new PC(MonitorType.IPS);
         default:
            throw new Error("type not found");
      }
   }
}

class ComputerFactory {
   static buildComputer(
      computerType: ComputerType,
      monitorType: MonitorType
   ): Computer {
      switch (monitorType) {
         case MonitorType.LED:
            return LEDComputerType.buildComputer(computerType);
         case MonitorType.IPS:
            return IPSComputerType.buildComputer(computerType);
         default:
            throw new Error("tipe tidak ditemukan");
      }
   }
}

const pcled = ComputerFactory.buildComputer(ComputerType.PC, MonitorType.LED);
console.log(pcled);
console.log(pcled.getModel());

const laptopips = ComputerFactory.buildComputer(
   ComputerType.LAPTOP,
   MonitorType.IPS
);
console.log(laptopips.getModel());
