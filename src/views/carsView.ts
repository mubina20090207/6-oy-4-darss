export function renderCarsView(cars) {
    let html = '<h1>Список автомобилей</h1>';
    html += '<table class="table">';
    html += '<thead><tr><th>ID</th><th>Модель</th><th>Бренд ID</th><th>Год</th></tr></thead>';
    html += '<tbody>';

    cars.forEach(car => {
        html += `<tr>
                    <td>${car.id}</td>
                    <td>${car.model}</td>
                    <td>${car.brandId}</td>
                    <td>${car.year}</td>
                 </tr>`;
    });

    html += '</tbody></table>';
    return html;
}