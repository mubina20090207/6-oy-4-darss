export function renderBrandView(brands) {
    let html = '<h1>Список Брендов</h1>';
    html += '<table class="table">';
    html += '<thead><tr><th>ID</th><th>Название</th><th>Страна</th></tr></thead>';
    html += '<tbody>';

    brands.forEach(brand => {
        html += `<tr>
                    <td>${brand.id}</td>
                    <td>${brand.name}</td>
                    <td>${brand.country}</td>
                 </tr>`;
    });

    html += '</tbody></table>';
    return html;
}