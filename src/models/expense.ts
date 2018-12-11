export class Expense {

 
    status?: string;

    constructor(
      public date: string,
      public amount: number,
      public category: string,
      public merchant: string,
      public notes?: string,
      public favIcon?: string
    ) {  

      if(!this.favIcon){
        this.favIcon = 'heart-outline';
      }
      if (!this.notes){
        this.notes = '';
      }
      this.status = "pending";
    }

 

  }