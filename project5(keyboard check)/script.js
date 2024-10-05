const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class="color">
    <table>
  <tr>
    <th>Key</th>
    <th>Key code</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${event.key === ' ' ? 'space':event.key}</td>       // if we press space key it will say space instead of empty
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
  </tr>
</table>
    </div>
    `
})