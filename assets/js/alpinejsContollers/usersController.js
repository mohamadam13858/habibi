

document.addEventListener('alpine:init', () => {
    Alpine.data('usersData', function () {
        return {
            users: [],
            pageusers: [],
            isloading: false,
            showAddModal: false,
            pageCount: 1,
            itemsCount: 4,
            currentPage: 2,
            getUsers() {
                this.isloading = true
                axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
                    this.users = res.data;
                    this.isloading = false
                })
            },
            pagination() {
                this.pageCount = math.ceil(this.users.length / this.itemsCount)
                let start = (this.currentPage * this.itemsCount) - this.itemsCount
                let end = this.currentPage * this.itemsCount
                this.pageusers = this.users.slice(start, end)
                s
            }

        }
    })
})
