<template>
    <div class="editCreate container">
        <div class="editCreate__main">
            <input v-model="course.course_name" type="text" class="editCreate__main-input" placeholder="Tên khóa học..." >
            <input v-model="course.price" type="text" class="editCreate__main-input" placeholder="Học phí...">
            <textarea v-model="course.description" class="editCreate__main-input" cols="30" rows="10" placeholder="Mô tả..."></textarea>
            <button v-if="$route.query.id" class="btn main__content-editBtn" @click="editCourse()">Lưu</button>
            <button v-else class="btn main__content-createBtn" @click="createCourse()">Thêm</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            course: {
                id: Math.floor(Math.random() * 1000) + 3,
                course_name: '',
                description: '',
                price: ''
            },
        }
    },
    created(){
        if(this.$route.query.id){
            const data = (this.$store.getters.courses).find(x => x.id === Number(this.$route.query.id));
            this.course = {
                id: data.id,
                course_name: data.course_name,
                description: data.description,
                price: data.price
            };
        }
    },
    methods: {
        createCourse(){
            this.$store.dispatch('addCourse', this.course);
            this.$router.push('/');
        },
        editCourse(){
            this.$store.dispatch('editCourse', this.course);
            this.$router.push('/');
        }
    }
}
</script>