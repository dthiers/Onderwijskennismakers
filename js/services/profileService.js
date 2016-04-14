app.factory('profileService', function profileService() {

    var profiles = [{
        "first_name": "Kristian",
        "last_name": "van den Berg",

        "profile_image": "images/Personen/persoon13.png",
        "titles": ["Moderator community School en Samenleving", "Expert community School en Samenleving"],
        "rating": 5,
        "items": [
            {
                title: "Onderzoeksmatig leiderschap",
                image: "images/classroom.jpg",
                description: "Pellentesque mattis vehicula neque, sit amet interdum dui condimentum non. Nullam purus sapien, consequat sed porttitor eget, lacinia sed nisi. Proin luctus nulla quis augue vestibulum, nec elementum ligula condimentum. Morbi accumsan mi turpis. Morbi eu ultricies lorem, a porta sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam pharetra tortor, sit amet tincidunt dolor rhoncus eu. In euismod magna non sapien finibus rutrum.",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius neque sit amet nulla euismod, nec porttitor elit bibendum. Nam ultricies gravida tincidunt. Integer vitae pharetra eros. Mauris ut enim dapibus, tincidunt odio sit amet, luctus sem. Pellentesque eleifend cursus ante, vitae faucibus dui luctus in. In diam ipsum, hendrerit nec justo nec, malesuada pulvinar nisl. Vestibulum suscipit pulvinar dui pellentesque maximus. Pellentesque congue fermentum nunc quis interdum.</br></br>Aliquam efficitur, risus id blandit aliquet, dolor dolor tristique velit, quis dignissim nibh magna in leo. Quisque velit mauris, ultrices at vestibulum quis, eleifend elementum lorem. Duis in placerat lectus. Maecenas sagittis volutpat eleifend. Nulla tortor felis, ultrices vel ipsum vestibulum, placerat imperdiet dui. Praesent lobortis hendrerit maximus."
            },
            {
                title: "Hoe geef ik het beste les?",
                image: "images/classroom.jpg",
                description: "Pellentesque mattis vehicula neque, sit amet interdum dui condimentum non. Nullam purus sapien, consequat sed porttitor eget, lacinia sed nisi. Proin luctus nulla quis augue vestibulum, nec elementum ligula condimentum. Morbi accumsan mi turpis. Morbi eu ultricies lorem, a porta sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam pharetra tortor, sit amet tincidunt dolor rhoncus eu. In euismod magna non sapien finibus rutrum.",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius neque sit amet nulla euismod, nec porttitor elit bibendum. Nam ultricies gravida tincidunt. Integer vitae pharetra eros. Mauris ut enim dapibus, tincidunt odio sit amet, luctus sem. Pellentesque eleifend cursus ante, vitae faucibus dui luctus in. In diam ipsum, hendrerit nec justo nec, malesuada pulvinar nisl. Vestibulum suscipit pulvinar dui pellentesque maximus. Pellentesque congue fermentum nunc quis interdum.</br></br>Aliquam efficitur, risus id blandit aliquet, dolor dolor tristique velit, quis dignissim nibh magna in leo. Quisque velit mauris, ultrices at vestibulum quis, eleifend elementum lorem. Duis in placerat lectus. Maecenas sagittis volutpat eleifend. Nulla tortor felis, ultrices vel ipsum vestibulum, placerat imperdiet dui. Praesent lobortis hendrerit maximus."
            },
            {
                title: "Some random article 3",
                image: "images/classroom.jpg",
                description: "Pellentesque mattis vehicula neque, sit amet interdum dui condimentum non. Nullam purus sapien, consequat sed porttitor eget, lacinia sed nisi. Proin luctus nulla quis augue vestibulum, nec elementum ligula condimentum. Morbi accumsan mi turpis. Morbi eu ultricies lorem, a porta sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam pharetra tortor, sit amet tincidunt dolor rhoncus eu. In euismod magna non sapien finibus rutrum.",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius neque sit amet nulla euismod, nec porttitor elit bibendum. Nam ultricies gravida tincidunt. Integer vitae pharetra eros. Mauris ut enim dapibus, tincidunt odio sit amet, luctus sem. Pellentesque eleifend cursus ante, vitae faucibus dui luctus in. In diam ipsum, hendrerit nec justo nec, malesuada pulvinar nisl. Vestibulum suscipit pulvinar dui pellentesque maximus. Pellentesque congue fermentum nunc quis interdum.</br></br>Aliquam efficitur, risus id blandit aliquet, dolor dolor tristique velit, quis dignissim nibh magna in leo. Quisque velit mauris, ultrices at vestibulum quis, eleifend elementum lorem. Duis in placerat lectus. Maecenas sagittis volutpat eleifend. Nulla tortor felis, ultrices vel ipsum vestibulum, placerat imperdiet dui. Praesent lobortis hendrerit maximus."
            },
            {
                title: "Some random article 4",
                image: "images/classroom.jpg",
                description: "Pellentesque mattis vehicula neque, sit amet interdum dui condimentum non. Nullam purus sapien, consequat sed porttitor eget, lacinia sed nisi. Proin luctus nulla quis augue vestibulum, nec elementum ligula condimentum. Morbi accumsan mi turpis. Morbi eu ultricies lorem, a porta sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam pharetra tortor, sit amet tincidunt dolor rhoncus eu. In euismod magna non sapien finibus rutrum.",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius neque sit amet nulla euismod, nec porttitor elit bibendum. Nam ultricies gravida tincidunt. Integer vitae pharetra eros. Mauris ut enim dapibus, tincidunt odio sit amet, luctus sem. Pellentesque eleifend cursus ante, vitae faucibus dui luctus in. In diam ipsum, hendrerit nec justo nec, malesuada pulvinar nisl. Vestibulum suscipit pulvinar dui pellentesque maximus. Pellentesque congue fermentum nunc quis interdum.</br></br>Aliquam efficitur, risus id blandit aliquet, dolor dolor tristique velit, quis dignissim nibh magna in leo. Quisque velit mauris, ultrices at vestibulum quis, eleifend elementum lorem. Duis in placerat lectus. Maecenas sagittis volutpat eleifend. Nulla tortor felis, ultrices vel ipsum vestibulum, placerat imperdiet dui. Praesent lobortis hendrerit maximus."
            },
            {
                title: "Some random article 5",
                image: "images/classroom.jpg",
                description: "Pellentesque mattis vehicula neque, sit amet interdum dui condimentum non. Nullam purus sapien, consequat sed porttitor eget, lacinia sed nisi. Proin luctus nulla quis augue vestibulum, nec elementum ligula condimentum. Morbi accumsan mi turpis. Morbi eu ultricies lorem, a porta sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam pharetra tortor, sit amet tincidunt dolor rhoncus eu. In euismod magna non sapien finibus rutrum.",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius neque sit amet nulla euismod, nec porttitor elit bibendum. Nam ultricies gravida tincidunt. Integer vitae pharetra eros. Mauris ut enim dapibus, tincidunt odio sit amet, luctus sem. Pellentesque eleifend cursus ante, vitae faucibus dui luctus in. In diam ipsum, hendrerit nec justo nec, malesuada pulvinar nisl. Vestibulum suscipit pulvinar dui pellentesque maximus. Pellentesque congue fermentum nunc quis interdum.</br></br>Aliquam efficitur, risus id blandit aliquet, dolor dolor tristique velit, quis dignissim nibh magna in leo. Quisque velit mauris, ultrices at vestibulum quis, eleifend elementum lorem. Duis in placerat lectus. Maecenas sagittis volutpat eleifend. Nulla tortor felis, ultrices vel ipsum vestibulum, placerat imperdiet dui. Praesent lobortis hendrerit maximus."
            }
        ]
    }, {
        "first_name": "Erik",
        "last_name": "van Dijk",

        "profile_image": "images/profile.jpg",
        "titles": ["Moderator community School en Samenleving", "Expert community School en Samenleving"],
        "rating": 5,
        "items": [
            {
                title: "Onderzoeksmatig leiderschap",
                image: "images/classroom.jpg",
                description: "Pellentesque mattis vehicula neque, sit amet interdum dui condimentum non. Nullam purus sapien, consequat sed porttitor eget, lacinia sed nisi. Proin luctus nulla quis augue vestibulum, nec elementum ligula condimentum. Morbi accumsan mi turpis. Morbi eu ultricies lorem, a porta sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam pharetra tortor, sit amet tincidunt dolor rhoncus eu. In euismod magna non sapien finibus rutrum.",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius neque sit amet nulla euismod, nec porttitor elit bibendum. Nam ultricies gravida tincidunt. Integer vitae pharetra eros. Mauris ut enim dapibus, tincidunt odio sit amet, luctus sem. Pellentesque eleifend cursus ante, vitae faucibus dui luctus in. In diam ipsum, hendrerit nec justo nec, malesuada pulvinar nisl. Vestibulum suscipit pulvinar dui pellentesque maximus. Pellentesque congue fermentum nunc quis interdum.</br></br>Aliquam efficitur, risus id blandit aliquet, dolor dolor tristique velit, quis dignissim nibh magna in leo. Quisque velit mauris, ultrices at vestibulum quis, eleifend elementum lorem. Duis in placerat lectus. Maecenas sagittis volutpat eleifend. Nulla tortor felis, ultrices vel ipsum vestibulum, placerat imperdiet dui. Praesent lobortis hendrerit maximus."
            },
            {
                title: "Hoe geef ik het beste les?",
                image: "images/classroom.jpg",
                description: "Pellentesque mattis vehicula neque, sit amet interdum dui condimentum non. Nullam purus sapien, consequat sed porttitor eget, lacinia sed nisi. Proin luctus nulla quis augue vestibulum, nec elementum ligula condimentum. Morbi accumsan mi turpis. Morbi eu ultricies lorem, a porta sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam pharetra tortor, sit amet tincidunt dolor rhoncus eu. In euismod magna non sapien finibus rutrum.",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius neque sit amet nulla euismod, nec porttitor elit bibendum. Nam ultricies gravida tincidunt. Integer vitae pharetra eros. Mauris ut enim dapibus, tincidunt odio sit amet, luctus sem. Pellentesque eleifend cursus ante, vitae faucibus dui luctus in. In diam ipsum, hendrerit nec justo nec, malesuada pulvinar nisl. Vestibulum suscipit pulvinar dui pellentesque maximus. Pellentesque congue fermentum nunc quis interdum.</br></br>Aliquam efficitur, risus id blandit aliquet, dolor dolor tristique velit, quis dignissim nibh magna in leo. Quisque velit mauris, ultrices at vestibulum quis, eleifend elementum lorem. Duis in placerat lectus. Maecenas sagittis volutpat eleifend. Nulla tortor felis, ultrices vel ipsum vestibulum, placerat imperdiet dui. Praesent lobortis hendrerit maximus."
            },
            {
                title: "Some random article 3",
                image: "images/classroom.jpg",
                description: "Pellentesque mattis vehicula neque, sit amet interdum dui condimentum non. Nullam purus sapien, consequat sed porttitor eget, lacinia sed nisi. Proin luctus nulla quis augue vestibulum, nec elementum ligula condimentum. Morbi accumsan mi turpis. Morbi eu ultricies lorem, a porta sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam pharetra tortor, sit amet tincidunt dolor rhoncus eu. In euismod magna non sapien finibus rutrum.",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius neque sit amet nulla euismod, nec porttitor elit bibendum. Nam ultricies gravida tincidunt. Integer vitae pharetra eros. Mauris ut enim dapibus, tincidunt odio sit amet, luctus sem. Pellentesque eleifend cursus ante, vitae faucibus dui luctus in. In diam ipsum, hendrerit nec justo nec, malesuada pulvinar nisl. Vestibulum suscipit pulvinar dui pellentesque maximus. Pellentesque congue fermentum nunc quis interdum.</br></br>Aliquam efficitur, risus id blandit aliquet, dolor dolor tristique velit, quis dignissim nibh magna in leo. Quisque velit mauris, ultrices at vestibulum quis, eleifend elementum lorem. Duis in placerat lectus. Maecenas sagittis volutpat eleifend. Nulla tortor felis, ultrices vel ipsum vestibulum, placerat imperdiet dui. Praesent lobortis hendrerit maximus."
            },
            {
                title: "Some random article 4",
                image: "images/classroom.jpg",
                description: "Pellentesque mattis vehicula neque, sit amet interdum dui condimentum non. Nullam purus sapien, consequat sed porttitor eget, lacinia sed nisi. Proin luctus nulla quis augue vestibulum, nec elementum ligula condimentum. Morbi accumsan mi turpis. Morbi eu ultricies lorem, a porta sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam pharetra tortor, sit amet tincidunt dolor rhoncus eu. In euismod magna non sapien finibus rutrum.",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius neque sit amet nulla euismod, nec porttitor elit bibendum. Nam ultricies gravida tincidunt. Integer vitae pharetra eros. Mauris ut enim dapibus, tincidunt odio sit amet, luctus sem. Pellentesque eleifend cursus ante, vitae faucibus dui luctus in. In diam ipsum, hendrerit nec justo nec, malesuada pulvinar nisl. Vestibulum suscipit pulvinar dui pellentesque maximus. Pellentesque congue fermentum nunc quis interdum.</br></br>Aliquam efficitur, risus id blandit aliquet, dolor dolor tristique velit, quis dignissim nibh magna in leo. Quisque velit mauris, ultrices at vestibulum quis, eleifend elementum lorem. Duis in placerat lectus. Maecenas sagittis volutpat eleifend. Nulla tortor felis, ultrices vel ipsum vestibulum, placerat imperdiet dui. Praesent lobortis hendrerit maximus."
            },
            {
                title: "Some random article 5",
                image: "images/classroom.jpg",
                description: "Pellentesque mattis vehicula neque, sit amet interdum dui condimentum non. Nullam purus sapien, consequat sed porttitor eget, lacinia sed nisi. Proin luctus nulla quis augue vestibulum, nec elementum ligula condimentum. Morbi accumsan mi turpis. Morbi eu ultricies lorem, a porta sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam pharetra tortor, sit amet tincidunt dolor rhoncus eu. In euismod magna non sapien finibus rutrum.",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius neque sit amet nulla euismod, nec porttitor elit bibendum. Nam ultricies gravida tincidunt. Integer vitae pharetra eros. Mauris ut enim dapibus, tincidunt odio sit amet, luctus sem. Pellentesque eleifend cursus ante, vitae faucibus dui luctus in. In diam ipsum, hendrerit nec justo nec, malesuada pulvinar nisl. Vestibulum suscipit pulvinar dui pellentesque maximus. Pellentesque congue fermentum nunc quis interdum.</br></br>Aliquam efficitur, risus id blandit aliquet, dolor dolor tristique velit, quis dignissim nibh magna in leo. Quisque velit mauris, ultrices at vestibulum quis, eleifend elementum lorem. Duis in placerat lectus. Maecenas sagittis volutpat eleifend. Nulla tortor felis, ultrices vel ipsum vestibulum, placerat imperdiet dui. Praesent lobortis hendrerit maximus."
            }
        ]
    }, {
        "first_name": "Erika",
        "last_name": "Terpstra",

        "profile_image": "images/terpstra.jpg",
        "titles": ["Expert community School en Samenleving"],
        "rating": 2,
        "items": [
            {
                title: "Onderzoeksmatig leiderschap",
                image: "images/classroom.jpg",
                description: "Pellentesque mattis vehicula neque, sit amet interdum dui condimentum non. Nullam purus sapien, consequat sed porttitor eget, lacinia sed nisi. Proin luctus nulla quis augue vestibulum, nec elementum ligula condimentum. Morbi accumsan mi turpis. Morbi eu ultricies lorem, a porta sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam pharetra tortor, sit amet tincidunt dolor rhoncus eu. In euismod magna non sapien finibus rutrum.",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius neque sit amet nulla euismod, nec porttitor elit bibendum. Nam ultricies gravida tincidunt. Integer vitae pharetra eros. Mauris ut enim dapibus, tincidunt odio sit amet, luctus sem. Pellentesque eleifend cursus ante, vitae faucibus dui luctus in. In diam ipsum, hendrerit nec justo nec, malesuada pulvinar nisl. Vestibulum suscipit pulvinar dui pellentesque maximus. Pellentesque congue fermentum nunc quis interdum.</br></br>Aliquam efficitur, risus id blandit aliquet, dolor dolor tristique velit, quis dignissim nibh magna in leo. Quisque velit mauris, ultrices at vestibulum quis, eleifend elementum lorem. Duis in placerat lectus. Maecenas sagittis volutpat eleifend. Nulla tortor felis, ultrices vel ipsum vestibulum, placerat imperdiet dui. Praesent lobortis hendrerit maximus."
            },
            {
                title: "Hoe geef ik het beste les?",
                image: "images/classroom.jpg",
                description: "Pellentesque mattis vehicula neque, sit amet interdum dui condimentum non. Nullam purus sapien, consequat sed porttitor eget, lacinia sed nisi. Proin luctus nulla quis augue vestibulum, nec elementum ligula condimentum. Morbi accumsan mi turpis. Morbi eu ultricies lorem, a porta sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam pharetra tortor, sit amet tincidunt dolor rhoncus eu. In euismod magna non sapien finibus rutrum.",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius neque sit amet nulla euismod, nec porttitor elit bibendum. Nam ultricies gravida tincidunt. Integer vitae pharetra eros. Mauris ut enim dapibus, tincidunt odio sit amet, luctus sem. Pellentesque eleifend cursus ante, vitae faucibus dui luctus in. In diam ipsum, hendrerit nec justo nec, malesuada pulvinar nisl. Vestibulum suscipit pulvinar dui pellentesque maximus. Pellentesque congue fermentum nunc quis interdum.</br></br>Aliquam efficitur, risus id blandit aliquet, dolor dolor tristique velit, quis dignissim nibh magna in leo. Quisque velit mauris, ultrices at vestibulum quis, eleifend elementum lorem. Duis in placerat lectus. Maecenas sagittis volutpat eleifend. Nulla tortor felis, ultrices vel ipsum vestibulum, placerat imperdiet dui. Praesent lobortis hendrerit maximus."
            },
            {
                title: "Some random article 3",
                image: "images/classroom.jpg",
                description: "Pellentesque mattis vehicula neque, sit amet interdum dui condimentum non. Nullam purus sapien, consequat sed porttitor eget, lacinia sed nisi. Proin luctus nulla quis augue vestibulum, nec elementum ligula condimentum. Morbi accumsan mi turpis. Morbi eu ultricies lorem, a porta sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam pharetra tortor, sit amet tincidunt dolor rhoncus eu. In euismod magna non sapien finibus rutrum.",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius neque sit amet nulla euismod, nec porttitor elit bibendum. Nam ultricies gravida tincidunt. Integer vitae pharetra eros. Mauris ut enim dapibus, tincidunt odio sit amet, luctus sem. Pellentesque eleifend cursus ante, vitae faucibus dui luctus in. In diam ipsum, hendrerit nec justo nec, malesuada pulvinar nisl. Vestibulum suscipit pulvinar dui pellentesque maximus. Pellentesque congue fermentum nunc quis interdum.</br></br>Aliquam efficitur, risus id blandit aliquet, dolor dolor tristique velit, quis dignissim nibh magna in leo. Quisque velit mauris, ultrices at vestibulum quis, eleifend elementum lorem. Duis in placerat lectus. Maecenas sagittis volutpat eleifend. Nulla tortor felis, ultrices vel ipsum vestibulum, placerat imperdiet dui. Praesent lobortis hendrerit maximus."
            },
            {
                title: "Some random article 4",
                image: "images/classroom.jpg",
                description: "Pellentesque mattis vehicula neque, sit amet interdum dui condimentum non. Nullam purus sapien, consequat sed porttitor eget, lacinia sed nisi. Proin luctus nulla quis augue vestibulum, nec elementum ligula condimentum. Morbi accumsan mi turpis. Morbi eu ultricies lorem, a porta sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam pharetra tortor, sit amet tincidunt dolor rhoncus eu. In euismod magna non sapien finibus rutrum.",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius neque sit amet nulla euismod, nec porttitor elit bibendum. Nam ultricies gravida tincidunt. Integer vitae pharetra eros. Mauris ut enim dapibus, tincidunt odio sit amet, luctus sem. Pellentesque eleifend cursus ante, vitae faucibus dui luctus in. In diam ipsum, hendrerit nec justo nec, malesuada pulvinar nisl. Vestibulum suscipit pulvinar dui pellentesque maximus. Pellentesque congue fermentum nunc quis interdum.</br></br>Aliquam efficitur, risus id blandit aliquet, dolor dolor tristique velit, quis dignissim nibh magna in leo. Quisque velit mauris, ultrices at vestibulum quis, eleifend elementum lorem. Duis in placerat lectus. Maecenas sagittis volutpat eleifend. Nulla tortor felis, ultrices vel ipsum vestibulum, placerat imperdiet dui. Praesent lobortis hendrerit maximus."
            },
            {
                title: "Some random article 5",
                image: "images/classroom.jpg",
                description: "Pellentesque mattis vehicula neque, sit amet interdum dui condimentum non. Nullam purus sapien, consequat sed porttitor eget, lacinia sed nisi. Proin luctus nulla quis augue vestibulum, nec elementum ligula condimentum. Morbi accumsan mi turpis. Morbi eu ultricies lorem, a porta sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam pharetra tortor, sit amet tincidunt dolor rhoncus eu. In euismod magna non sapien finibus rutrum.",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius neque sit amet nulla euismod, nec porttitor elit bibendum. Nam ultricies gravida tincidunt. Integer vitae pharetra eros. Mauris ut enim dapibus, tincidunt odio sit amet, luctus sem. Pellentesque eleifend cursus ante, vitae faucibus dui luctus in. In diam ipsum, hendrerit nec justo nec, malesuada pulvinar nisl. Vestibulum suscipit pulvinar dui pellentesque maximus. Pellentesque congue fermentum nunc quis interdum.</br></br>Aliquam efficitur, risus id blandit aliquet, dolor dolor tristique velit, quis dignissim nibh magna in leo. Quisque velit mauris, ultrices at vestibulum quis, eleifend elementum lorem. Duis in placerat lectus. Maecenas sagittis volutpat eleifend. Nulla tortor felis, ultrices vel ipsum vestibulum, placerat imperdiet dui. Praesent lobortis hendrerit maximus."
            }
        ]
    }, {
        "first_name": "first_name",
        "last_name": "last_name",

        "profile_image": "images/profile.jpg",
        "titles": ["titles"],
        "rating": 3,
        "items": [
            {
                title: "test_item",
                image: "images/classroom.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius neque sit amet nulla euismod, nec porttitor elit bibendum. Nam ultricies gravida tincidunt. Integer vitae pharetra eros."
            }
        ]
    }];

    return {
        getProfile: function (id) {
            return profiles[id];
        }
    }

});
