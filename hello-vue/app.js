new Vue({
    el: '#app',
    data() {
        return {
            info: {
                data: [
                    {
                        "userId": 1,
                        "id": "0",
                        "title": "moto",
                        "body": "To be or not to be ,that is a question"
                    }]
            },
            count: 1,
            loading: false,
            a: 0,
            show: false
        }
    }
    ,
    methods: {
        search(event) {
            this.loading = true;
            this.a = 0;
            this.show = false;
            axios
                .get("https://jsonplaceholder.typicode.com/posts")
                .then(response =>
                    (this.info.data = response.data,
                        this.count = response.data.length,
                        this.loading = false,
                        this.show = true))
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });
        },
        clean(event) {
            this.info.data = [],
                this.count = 0
            this.show = false
        },
        goBack() {
            const h = this.$createElement;
            this.$notify({
                title: '抱歉，回不去了',
                message: h('i', { style: 'color: teal' }, '系统还在开发中…'),
                type: 'warning'
            });
        },
        open() {
            this.$message('抱歉，回不去了');
        },
        open3() {
            this.$message({
                showClose: true,
                message: '抱歉，回不去了……',
                type: 'warning'
            });
        }
    }
    // ,
    // mounted () {
    //   axios
    //     .get("https://jsonplaceholder.typicode.com/posts")
    //     .then(response => (this.info = response))
    //     .catch(function (error) { // 请求失败处理
    //       console.log(error);
    //     });
    // }
})