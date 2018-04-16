// $(document).ready(function() {
// })

window.onload = function() {
    this.fetch('/pages/comp_cate/index.html').then(html => {
        return html.text()
    })
    .then(html => {
        this.document.getElementById('category-container').innerHTML = html
    })
}