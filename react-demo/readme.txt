1、项目名称：西十区票务网
2、项目介绍：是一个B2C项目
3、该项目的技术栈：react react-router-4.0 react-redux react-thunk react-promise
               webpack sass react-swipe restful-api github bootstrap lodash axios
               flex:Home(list swipe) Product(list pagination search)
               detail(list addtocart) Cart
4、react脚手架 node 
5、功能模块：单页面切换，图片列表，详情页，搜索，分页以及简单的添加购物车
6、https://github.com/fishOnLand/react-demo
7、技术难点：1：详情页里有不同的数据接口，通过编程路由只能传递一个参数或者说一个url
            解决方法---在不影响参数的情况下，在url上新增一个数据接口的唯一性标识
            2：分页的实现：不知怎么将点击的页数与页面对应
            解决方法：---给当前点击的元素设置自定义属性，通过e.currentTarget或者e.target
                    来获取自定义属性再以参数的形式传递到store数据里
            3：添加购物车：点击商品确定数量的问题
            解决方法：通过for循环来判断比较去重后的数组点击了几次，使其数量++，再显示到页面








