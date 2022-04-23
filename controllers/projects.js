
module.exports = {
    index,
    homeView,
    show,
    contact
}


function index(req, res){
    res.render('projects/index', {title: 'Projects'});
}

function homeView(req, res){
    res.render('index', { title: 'Welcome' })
}


function show(req, res){
    res.render('about', {title: 'About Me'})
}

function contact(req, res){
    res.render('contact', {title: 'Contact Me'})
}