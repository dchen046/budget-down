function BudgetData(income, expenses) {
    this.income = income;
    this.expenses = expenses;
    this.net = income - expenses;
}

let summary;

const create_calc_event = () => {
    const calc_btn = document.getElementById("calc-btn");

    calc_btn.addEventListener("click", () => {
        update_summary();
        write_summary();
    });
}


const update_summary = () => {
    income = Number(document.getElementById("monthly-income").value);
    summary = new BudgetData(income, total_expenses);
}

const write_summary = () => {
    const summary_content = document.getElementById("summary-contents");
    // remove prev data if there is
    if (summary_content.hasChildNodes()) {
        summary_content.removeChild(summary_content.firstChild);
    }
    
    const content = document.createElement("p");
    summary_content.appendChild(content);

    const data = [
        `Montly Income : ${summary.income}`,
        `Monthly Expenses : ${summary.expenses}`,
        `Net Income : ${summary.net}`,
    ]

    for (let i = 0; i < data.length; ++i) {
        content.innerText += data[i] + "\n";
    }
}

create_calc_event();