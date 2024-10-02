let item_counter = 0;
let total_expenses = 0;

const create_add_event = () => {
    const add_btn = document.getElementById("btn-addon");
    add_btn.addEventListener("click", () => {
        update_table();
    });
}

const update_table = () => {
    const item = document.getElementById("item").value;
    const price = document.getElementById("price").value;
    ++item_counter;
    total_expenses += Number(price);
    const data = [item, price]
    const table_content = document.getElementById("table-content");
    table_content.appendChild(create_table_data(data));
}

const create_table_data = (data) => {
    const table_row = document.createElement("tr");
    for (let i = 0; i < data.length; ++i) {
        const td = document.createElement("td");
        td.innerText = data[i];
        table_row.appendChild(td);
    }
    table_row.appendChild(create_table_category());
    table_row.appendChild(create_table_delete());
    return table_row;
}

const create_table_category = () => {
    const td = document.createElement("td");
    const segment = document.createElement("div");
    segment.classList.add("btn-group");
    segment.setAttribute("role", "group");
    td.appendChild(segment);
    create_segment_controls(segment, "btn-need", "Need");
    create_segment_controls(segment, "btn-want", "Want");
    return td;
}

const create_segment_controls = (parent, id, text) => {
    const seg_input = document.createElement("input");
    const seg_label = document.createElement("label");
    parent.appendChild(seg_input);
    parent.appendChild(seg_label);

    const input_attr = new Map([
        ["type", "radio"],
        ["class", "btn-check"],
        ["name", `item-actions${item_counter}`],
        ["acutocomplete", "off"]
    ]);

    for (const [key, value] of input_attr) {
        seg_input.setAttribute(key, value);
    }
    seg_input.setAttribute("id", `${id + item_counter}`);

    const label_classes = ["btn", "btn-sm", "btn-outline-secondary"]
    for (let i = 0; i < label_classes.length; ++i) {
        seg_label.classList.add(label_classes[i]);
    }
    seg_label.setAttribute("for", `${id + item_counter}`);
    seg_label.innerText = text;
}

const create_table_delete = () => {
    const td = document.createElement("td");
    const btn = document.createElement("button");
    const btn_classes = ["btn", "btn-sm", "btn-outline-danger"]
    for (let i = 0; i < btn_classes.length; ++i) {
        btn.classList.add(btn_classes[i]);
    }
    btn.innerText = "Delete";
    add_delete_event(btn);
    td.appendChild(btn);
    return td;
}

const add_delete_event = (btn) => {
    btn.addEventListener("click", (e) => {
        let btn_parent = e.target.parentNode;
        let data = btn_parent;
        let row = btn_parent.parentNode;
        let content = row.parentNode;

        // price is 3rd column
        for (let i = 0; i < 2; ++i) {
            data = data.previousSibling;
        }
        content.removeChild(row);
        total_expenses -= Number(data.innerText);
        
    });
}

create_add_event();