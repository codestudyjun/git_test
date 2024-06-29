document.getElementById('inputname').addEventListener('submit', function(event) {
    event.preventDefault();  

    var name = document.getElementById('name').value; 

    document.getElementById('inputname').style.display = 'none';  
    document.getElementById('greeting').textContent = '환영합니다, ' + name + '!';  
}); 