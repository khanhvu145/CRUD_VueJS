export const state = () => ({
    courses: [
        {
            id: 1,
            course_name: 'Lập trình HTML/CSS',
            description: 'Khóa học giúp học viên đạt được các kiến thức và rèn luyện các kỹ năng xây dựng trang web với ngôn ngữ HTML, CSS.',
            price: '1.500.000đ'
        },
        {
            id: 2,
            course_name: 'Lập trình JavaScript',
            description: 'Khóa học giúp bạn hiểu rõ tường tận scope, toán tử, hàm, hướng đối tượng trong Javascript. Làm chủ Javascript, ES6.',
            price: '1.800.000đ'
        },
        {
            id: 3,
            course_name: 'Lập trình VueJS',
            description: 'Khóa học cung cấp kỹ năng phân tích, thiết kế, xây dựng ứng dụng trên nền tảng web với ngôn ngữ lập trình VueJs.',
            price: '2.200.000đ'
        },
    ]
});
  
export const mutations = {
    addCourse(state, course){
        state.courses.push(course);
    },
    deleteCourse(state, course){
        const indexCourse = state.courses.findIndex(x => x.id === course.id);
        state.courses.splice(indexCourse, 1);
    },
    editCourse(state, course){
        for(let i = 0; i < state.courses.length; i++){
            if(state.courses[i].id === course.id){
                state.courses[i] = course;
            }
        }
    },
};

export const actions = {
    addCourse(vuexContext, course){
        vuexContext.commit("addCourse", course);
    },
    deleteCourse(vuexContext, course){
        vuexContext.commit("deleteCourse", course);
    },
    editCourse(vuexContext, course){
        vuexContext.commit("editCourse", course);
    }
};

export const getters = {
    courses: (state) => {
        return state.courses;
    },
};