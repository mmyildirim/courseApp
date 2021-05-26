//Course Constructor
function Course(title, instructor, image) {
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}
//UI Constructor
function UI() {

}
UI.prototype.addCourseList = function (course) {
    const list = document.getElementById('course-list');
    var html = `
    <tr>
        <td><img src="img/${course.image}"/></td>
        <td>${course.title}</td>
        <td>${course.instructor}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
    </tr>
    
    `;
    list.innerHTML += html;
}
UI.prototype.clearControls = function () {
    const title = document.getElementById('title').value = "";
    const instructor = document.getElementById('instructor').value = "";
    const image = document.getElementById('image').value = "";

}

UI.prototype.deleteCourse = function (element) {
    if (element.classList.contains('delete')) {
        element.parentElement.parentElement.remove();
    }
}
UI.prototype.showAlert = function (message, className) {

    var alert = `
        <div class="alert text-center alert-${className}">
            ${message}
        </div>
    `;
    const row = document.querySelector('.row');
    //alert show
    row.insertAdjacentHTML('beforebegin', alert);

    setTimeout(()=>{
        const alert=document.querySelector('.alert').remove()
    },2800);
}
document.getElementById('new-course').addEventListener('submit', function (e) {

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    //create course 
    const course = new Course(title, instructor, image);
    //create uı 
    const ui = new UI();


    if (title === '' ||instructor === ''|| image === '') {
        ui.showAlert('Lütfen Formu Eksiksiz Doldurunuz.', 'warning');
    }else {
        //add course to list
        ui.addCourseList(course);

        //clear list
        ui.clearControls();

        ui.showAlert('Kursunuz Basariyla Eklendi', 'success');
        console.log(course);

    }




    e.preventDefault();
});

const list = document.getElementById('course-list').addEventListener('click', function (e) {
    console.log(e.target);

    const ui = new UI();
    ui.deleteCourse(e.target);
    ui.showAlert('Sectiginiz Kurs Silindi', 'danger');

});