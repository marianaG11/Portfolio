
module.exports = {
    index
}


function index(req, res){
    res.render('projects/index', {title: 'Projects'});
}