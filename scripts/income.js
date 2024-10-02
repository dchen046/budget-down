class BudgetData {
    constructor(income, expenses) {
        this.income = income;
        this.expenses = expenses;
        this.net = income - expenses;
        this.percent = Math.round(100 * this.net / this.income);
    }
}

let summary;

const create_calc_event = () => {
    const calc_btn = document.getElementById("calc-btn");

    calc_btn.addEventListener("click", () => {
        update_summary();
        write_data_summary();
        write_description();
    });
}


const update_summary = () => {
    income = Number(document.getElementById("monthly-income").value);
    summary = new BudgetData(income, total_expenses);
}

const write_data_summary = () => {
    const summary_content = document.getElementById("summary-contents");

    const data_content = document.getElementById("data-content");
    data_content.innerHTML = "";

    const data = [
        `Montly Income : ${summary.income}`,
        `Monthly Expenses : ${summary.expenses}`,
        `Net Income : ${summary.net}`,
    ]

    for (let i = 0; i < data.length; ++i) {
        data_content.innerText += data[i] + "\n";
    }
}

const write_description = () => {
    const description_content = document.getElementById("description-content");
    description_content.innerHTML = "";
    if (summary.net > 0) {
        description_content.innerText += `You are saving roughly ${summary.percent}% of your monthly income!\n`
    } else if (summary.net < 0) {
        description_content.innerText += `You are not saving anything! Please re-evaluate your life decisions and cut down on some expenses.\n`
    } else {
        description_content.innerText += "You have no monthly income. Get your money up not your funny up!"
    }

}

create_calc_event();