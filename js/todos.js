$(function () {
    //输入内容点击回车键增加li然后判断是否有li显示全选符号和下面的菜单
    $(".todoscontent").keyup(function (event) {
        if (event.keyCode == 13) {
            var oText = $(".todoscontent").val();
            if (oText == "") {
                return;
            } else {
                $(".ul1").append("<li>" + "<input type='checkbox' class='fl wh30'>" + "<span>" + oText + "</span>" + "<button class='close dn fr wh18'>" + "</button>" + "</li>");
                $(":text").val("");
            }
            if ($(".ul1 li").length > 0) {
                $(".checkall,.list").show();
            }
            //当回车键入信息或者单击选项框或者删除li时，全选符号会根据当前所有事件是否处于选中状态而变化自己的选中状态
            if ($(".ul1 li input:checked").length < $('.ul1 li input').length){
                $('.checkall').prop('checked', false);
            }
            if ($(".ul1 li input:checked").length == $('.ul1 li input').length) {
                $('.checkall').prop('checked', true);
            }
            //在回车，删除，单击，全选后面都加上了这一串代码，实现信息条数的显示
            $(".list span").text($(".ul1 li input:not(:checked)").length + " " + "items left");
        }
    });

    //点击全选符号选中所有li，再次点击取消选中所有li
    $(".checkall").on('click', function () {

        var isCheckedAll = $(this).is(":checked");

        $(".ul1").each(function () {
            $(".ul1 li input").prop('checked', isCheckedAll );
        });

        //当Active处于选中状态时，点击全选自动隐藏所有事件，下面单击事件里也存在该串代码
        if ($(".Active").hasClass('focuse')) {
            $('.ul1 li input:checked').parent('li').hide();
        }
        //判断是否存在li，不存在的话隐藏符号和列表,在下列好几个事件中都存在这串代码
        if ($(".ul1 li").length > 0) {
            $(".checkall,.list").show();
        } else {
            $(".checkall,.list").hide();
        }
        //判断是否存在被选中的li，如果存在显示Clear completed，不存在则隐藏
        if ($('.ul1 li input:checked').length > 0) {
            $(".Clear").show();
        } else {
            $(".Clear").hide();
        }
        //点击全选的时候文字变化
        $('.ul1 li input:checked').parent('li').addClass('finish');
        $('.ul1 li input:not(:checked)').parent('li').removeClass('finish');
        $(".list span").text($(".ul1 li input:not(:checked)").length + " " + "items left");
    });

    //当点击单选的时候文字和全选符号的变化
    $('.ul1').on('click', 'li input', function () {
        //作全选符号状态的判断
        if ($(".ul1 li input:checked").length < $('.ul1 li input').length){
            $('.checkall').prop('checked', false);
        }
        if ($(".ul1 li input:checked").length == $('.ul1 li input').length) {
            $('.checkall').prop('checked', true);
        }
        if ($(".Active").hasClass('focuse')) {
            $('.ul1 li input:checked').parent('li').hide();
        }
        if ($(".ul1 li").length) {
            $(".checkall,.list").show();
        } else {
            $(".checkall,.list").hide();
        }
        if ($('.ul1 li input:checked').length > 0) {
            $(".Clear").show();
        } else {
            $(".Clear").hide();
        }
        $('.ul1 li input:checked').parent('li').addClass('finish');
        $('.ul1 li input:not(:checked)').parent('li').removeClass('finish');
        $(".list span").text($(".ul1 li input:not(:checked)").length + " " + "items left");
    });

    //鼠标移到li上显示关闭图标
    $(".ul1").on('mouseover', 'li', function () {
        $(this).find('button').show();
    });

    $(".ul1").on('mouseout', 'li', function () {
        $(this).find('button').hide();
    });

    //点击关闭图标删除当前li然后判断是否有li隐藏全选符号和下面的列表
    $('.ul1').on('click', 'li button', function () {
        //删除当前的li
        $(this).parent('li').remove();
        if ($(".ul1 li input:checked").length < $('.ul1 li input').length){
            $('.checkall').prop('checked', false);
        }
        if ($(".ul1 li input:checked").length == $('.ul1 li input').length) {
            $('.checkall').prop('checked', true);
        }
        if ($(".ul1 li").length) {
            $(".checkall,.list").show();
        } else {
            $(".checkall,.list").hide();
        }
        if ($('.ul1 li input:checked').length) {
            $(".Clear").show();
        } else {
            $(".Clear").hide();
        }
        $(".list span").text($(".ul1 li input:not(:checked)").length + " " + "items left");
    });

    //获取列表里面焦点的时候发生的变化
    $('li.filter').on('click', function () {
        $(this).addClass('focuse').siblings().removeClass('focuse');
    });

    //点击All时显示所有的信息
    $('.All').on('click', function () {
        $(".ul1 li").show();
    });

    //点击Active时把完成的信息隐藏
    $('.Active').on('click', function () {
        $(".ul1 li input:checked").parent('li').hide();
        $(".ul1 li input:not(:checked)").parent('li').show();
    });

    //点击Completed时显示完成的信息
    $('.Completed').on('click', function () {
        $(".ul1 li input:checked").parent('li').show();
        $(".ul1 li input:not(:checked)").parent('li').hide();
    });

    //点击Clear completed的时候删除所有已完成的信息
    $('.Clear').on('click', function () {
        $(".ul1 li input:checked").parent('li').remove();
        if ($(".ul1 li").length > 0) {
            $(".checkall,.list").show();
        } else {
            $(".checkall,.list").hide();
        }
        $(this).hide();
    })
});
