export class Customer {
  // {name: 'ירוחם', street: 'הרב ברלין', house: 12, apartment: 4, tipped: 3, notTipped: 0},
  constructor(
    public name: string,
    public phone: string,
    public tipped: string,
    public notTipped: string,
    public averageTip: string,
    public totalTip: string
    ) {}
}
