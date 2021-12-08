<template>
  <div class="main">
    <div class="container main__container">
      <div class="main__heading">
        <input v-model="keyword" type="text" class="main__heading-searchInput" placeholder="Tìm kiếm..." @keyup="search()">
        <button class="btn main__heading-searchBtn">
          <i class='bx bx-search'></i>
        </button>
      </div>
      <div class="main__content">
        <button class="btn main__content-createBtn" @click="editCreateForm()">Thêm</button>
        <table>
          <thead>
            <tr>
                <th>STT</th>
                <th>Tên khóa học</th>
                <th>Mô tả</th>
                <th>Học phí</th>
                <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(course, index) in courses" :key="course.id">
              <td>{{ index + 1 }}</td>
              <td>{{ course.course_name }}</td>
              <td>{{ course.description }}</td>
              <td>{{ course.price }}</td>
              <td>
                <div>
                  <button :item="courses" class="btn main__content-editBtn" @click="editCreateForm(course)">Sửa</button>
                  <button class="btn main__content-deleteBtn" @click="courseDelete(course)">Xóa</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      courses: [],
      keyword: ''
    }
  },
  created(){
    this.courses = this.$store.getters.courses;
  },
  methods: {
    courseDelete(course){
      this.$store.dispatch('deleteCourse', course);
    },
    editCreateForm(course){
      if(course){
        this.courseItem = course;
        this.$router.push({ path: 'course', query: { id: course.id } });
      }
      else{
        this.$router.push('course');
      }
    },
    search(){
      this.courses = this.$store.getters.courses.filter(x => x.course_name.toLowerCase().includes(this.keyword.toLowerCase()));
    }
  }
}
</script>
