import menuItems from '../menu.json';
console.log(menuItems.length);

const refs ={
   productPagination: document.querySelector('.productPagination')
}

const pagination ={
    currentPage:1,
    totalProducts:0,
    productsPerPage:2,
    pagesCount:0
}

const createPaginationPage = (pageNumber)=>{
        return `
        <li class="paginationPageItem" data-page=${pageNumber}>${pageNumber}</li>`
    }
    
    const createPaginationMarkup =() =>{
        let markup='';
        for(let i=1; i<=pagination.pagesCount; i+=1){
            markup+=createPaginationPage(i)
        }
        return markup
    }
    
    const getActivePage=() =>{
        const pages =document.querySelectorAll('.paginationPageItem');
        pages[pagination.currentPage-1].classList.add('activePaginationPageItem');
    
    }
    const createPagination = ()=>{
        pagination.totalProducts = menuItems.length;
        pagination.pagesCount=Math.ceil(pagination.totalProducts/pagination.productsPerPage);
        refs.productPagination.innerHTML=createPaginationMarkup();
        // getActivePage();
    
    }
    
    const changePage = (e)=>{
        pagination.currentPage = e.target.dataset.page;
        createProductsMarkup();
        createPagination();
    }