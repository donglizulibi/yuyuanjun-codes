Object.prototype.hide = function() {
    this.setAttribute('hide', 'haha');
    // this.setAttribute('hide', true);
    alert('此按钮已经被污染')
}