(($) => {
    // My Social Links
    for (const key in socialink_dict) {
        console.log(
            key,
            socialink_dict[key].url,
            socialink_dict[key].username
        );
        $("#vfor-socialink").append(
            $("<li></li>").append(
                key,
                " ",
                $("<a></a>").attr("href", socialink_dict[key].url)
                            .text("@" + socialink_dict[key].username),
            )
        );
    }
    // Friends' Links
    for (const key in friendslink_dict) {
        console.log(
            key,
            friendslink_dict[key].url,
            friendslink_dict[key].desc.en,
            friendslink_dict[key].desc.zh,
        );
        $("#vfor-friendslink").append(
            $("<li></li>").append(
                $("<a></a>").attr("href", friendslink_dict[key].url)
                            .text(key),
                ": ",
                friendslink_dict[key].desc.en,
                ". (",
                friendslink_dict[key].desc.zh,
                ")"
            )
        );
    }
})(jQuery);