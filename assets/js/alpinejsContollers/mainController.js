
    document.addEventListener('alpine:init', () => {
        Alpine.data('', () => (
            {message: 'I love Programming' , names {'qasem', 'abbas' , 'nima'} , testFunc: (){
            
                alert(this.message)
            }
        }))
    })