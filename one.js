function calculateMoney(ticketSale) {
    if (ticketSale <= 0) {
        return 'Invalid Number'
    }
    const ticketPrice = 120;
    const gardSalary = 500;
    const stafLunchTk = 50;
    const worker = 8;
    const totalTicketPrice = ticketSale * ticketPrice;
    const gardPerDaySalary = totalTicketPrice - gardSalary;
    const stafPerDayLunchTk = worker * stafLunchTk;
    const totalCost = gardPerDaySalary - stafPerDayLunchTk;
    return totalCost;
}
// const output = calculateMoney(20);
// console.log(output);