$(function () {
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();

    $('.scroll').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    $('.modal').modal({
        startingTop: '0%',
        endingTop: '5%'
    });

    $('.modal-thumbnails').on('click',function() {
        var mainimage = $(this).data('mainimage');
        var src = $(this).find('img').attr('src');

        $('#'+mainimage).attr('src', src);
    });

    $('button[name="sendmail"]').on('click',function() {
        if (!$('#name').val()) {
            M.toast({
                html: 'お名前をご入力下さい。',
                classes: 'red lighten-1',
                displayLength: 6000
            })
            return;
        }

        if (!$('#email').val()) {
            M.toast({
                html: 'メールアドレスをご入力下さい。',
                classes: 'red lighten-1',
                displayLength: 6000
            })
            return;
        }

        if (!$('#message').val()) {
            M.toast({
                html: 'メッセージをご入力下さい。',
                classes: 'red lighten-1',
                displayLength: 6000
            })
            return;
        }

        $.ajax({
            type: 'POST',
            url: 'https://script.google.com/macros/s/AKfycbyTVDmtnxcMh11xjBhtvWrOTmaBqnu6Vl5nugHbG2GttxBq7AI/exec',
            data: {
                'name': $('#name').val(),
                'email': $('#email').val(),
                'message': $('#message').val(),
            },
            dataType: 'html',
        }).done(function (data) {
            M.toast({
                html: 'この度はお問合せ頂きありがとうございます!!<br>内容を確認後、ご連絡させて頂きます。',
                classes: 'blue lighten-1',
                displayLength: 6000
            })
        }).fail(function (err) {
        });
    });
})

// Language
var dataLiteracy = {
    labels: ['PHP', 'Ruby', 'Android', 'CSS', 'HTML', 'JavaScript'],
    datasets: [{
        data: [4, 3, 2, 2, 3, 4],
        label: '言語',
        backgroundColor: 'rgba(165, 214, 167, 0.2)',
        borderColor: 'rgba(165, 214, 167, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(165, 214, 167, 1)',
        pointBorderColor: '#fff'
    }]
};
var options = {
    scale: {
        ticks: {
            beginAtZero: true,
            stepSize: 1,
            max: 5,
            fontSize: 12
        },
        pointLabels: {
            fontSize: 12
        }
    }
};
var ctx = document.getElementById("language");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: dataLiteracy,
    options: options
});

// Database
var dataLiteracy = {
    labels: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Redis', 'MySQL'],
    datasets: [{
        data: [3, 2, 2, 2, 3],
        label: 'データベース',
        backgroundColor: 'rgba(144, 202, 249, 0.2)',
        borderColor: 'rgba(144, 202, 249, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(144, 202, 249, 1)',
        pointBorderColor: '#fff'
    }]
};
var options = {
    scale: {
        ticks: {
            beginAtZero: true,
            stepSize: 1,
            max: 5,
            fontSize: 12
        },
        pointLabels: {
            fontSize: 12
        }
    }
};
var ctx = document.getElementById("database");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: dataLiteracy,
    options: options
});

// Tool
var dataLiteracy = {
    labels: ['GitHub', 'Chatwork', 'Slack', 'Redmine', 'Bitbucket', 'Backlog'],
    datasets: [{
        data: [3, 3, 3, 2, 2, 4],
        label: 'ツール',
        backgroundColor: 'rgba(255, 204, 128, 0.2)',
        borderColor: 'rgba(255, 204, 128, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(255, 204, 128, 1)',
        pointBorderColor: '#fff'
    }]
};
var options = {
    scale: {
        ticks: {
            beginAtZero: true,
            stepSize: 1,
            max: 5,
            fontSize: 12
        },
        pointLabels: {
            fontSize: 12
        }
    }
};
var ctx = document.getElementById("tool");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: dataLiteracy,
    options: options
});

// Framework
var dataLiteracy = {
    labels: ['EC-CUBE2', 'Shopify', 'Vue.js', 'CakePHP', 'Laravel', 'Wordpress'],
    datasets: [{
        data: [4, 3, 2, 3, 4, 3],
        label: 'フレームワーク',
        backgroundColor: 'rgba(239, 154, 154, 0.2)',
        borderColor: 'rgba(239, 154, 154, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(239, 154, 154, 1)',
        pointBorderColor: '#fff'
    }]
};
var options = {
    scale: {
        ticks: {
            beginAtZero: true,
            stepSize: 1,
            max: 5,
            fontSize: 12
        },
        pointLabels: {
            fontSize: 12
        }
    }
};
var ctx = document.getElementById("framework");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: dataLiteracy,
    options: options
});

// Infrastructure
var dataLiteracy = {
    labels: ['CentOS', 'Heroku', 'Nginx', 'Apache', 'Docker'],
    datasets: [{
        data: [3, 3, 3, 3, 3],
        label: 'インフラ',
        backgroundColor: 'rgba(179, 157, 219, 0.2)',
        borderColor: 'rgba(179, 157, 219, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(179, 157, 219, 1)',
        pointBorderColor: '#fff'
    }]
};
var options = {
    scale: {
        ticks: {
            beginAtZero: true,
            stepSize: 1,
            max: 5,
            fontSize: 12
        },
        pointLabels: {
            fontSize: 12
        }
    }
};
var ctx = document.getElementById("infrastructure");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: dataLiteracy,
    options: options
});