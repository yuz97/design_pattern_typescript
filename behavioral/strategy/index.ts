interface NumericConverter {
   convertNumber(num: number): void;
}

class NumberConvertion {
   private strategy: NumericConverter;

   constructor(strategy: NumericConverter) {
      this.strategy = strategy;
   }

   execute(num: number): void {
      this.strategy.convertNumber(num);
   }
}

class NumberToCurrency implements NumericConverter {
   convertNumber(num: number): void {
      console.log(
         num.toLocaleString("id-ID", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "IDR",
         })
      );
   }
}

class NumberToDecimalSeparator implements NumericConverter {
   convertNumber(num: number): void {
      console.log(
         num.toLocaleString("id-ID", {
            minimumFractionDigits: 2,
         })
      );
   }
}

class NumberToDate implements NumericConverter {
   convertNumber(num: number): void {
      console.log(new Date(num * 1000).toUTCString());
      //   console.log(Date().split("-"));
   }
}

const data1 = new NumberConvertion(new NumberToDate());
data1.execute(2000);
// data1.execute(2023);

const mataUangIndonesia = new NumberConvertion(new NumberToCurrency());
mataUangIndonesia.execute(2000);
