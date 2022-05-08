const $ = document.querySelector.bind(document)
             const $$ = document.querySelectorAll.bind(document)

             const tabs = $$('.tab-item')
             const panes = $$('.tab-pane')

             const tabActive = $('.tab-item.active')
             const line = $('.tabs .line')
             
            //Line ở thẻ active mặc định
            line.style.width = tabActive.offsetWidth + 'px'
            line.style.left = tabActive.offsetLeft + 'px'

             

             tabs.forEach((tab,index) => {
                 const pane = panes[index]
                 tab.onclick = function(){
                     //line chạy theo khi click vào
                     line.style.width = this.offsetWidth + 'px'
                     line.style.left = this.offsetLeft + 'px'
                     
                     //xóa active ở thẻ cũ trước khi thêm vào thẻ mới
                     $('.tab-pane.active').classList.remove('active') 
                     pane.classList.add('active')

                     $('.tab-item.active').classList.remove('active')
                     this.classList.add('active')
                     

                    }
             });   
