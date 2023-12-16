
var AlbumsListPage = {
	init: function() {
		this.$container = $('.albums-container');
		this.render();
		this.bindEvents();
	},

	render: function() {

	},

	bindEvents: function() {
		$('.btn-favorite', this.$container).on('click', function(e) {
			e.preventDefault();

			var self = $(this);
			var url = $(this).attr('href');
			$.getJSON(url, function(result) {
				if (result.success) {
					$('.glyphicon-star', self).toggleClass('active');
				}
			});

			return false;
		});
	}
};

var SongsListPage = {
	init: function() {
		this.$container = $('.songs-container');
		this.render();
		this.bindEvents();
	},

	render: function() {

	},

	bindEvents: function() {
		$('.btn-favorite', this.$container).on('click', function(e) {
			e.preventDefault();

			var self = $(this);
			var url = $(this).attr('href');
			$.getJSON(url, function(result) {
				if (result.success) {
					$('.glyphicon-star', self).toggleClass('active');
				}
			});

			return false;
		});
	}
};

$(document).ready(function() {
	AlbumsListPage.init();
	SongsListPage.init();
});

<script>
    $(document).ready(function() {
        $(".btn-favorite").click(function() {
            var songId = $(this).data("songid");
            $.ajax({
                type: "POST",
                url: "{% url 'music:favorite_song' 0 %}".replace('0', songId),
                success: function(response) {
                    if (response.success) {
                        // Refresh atau lakukan tindakan lain setelah berhasil menandai/menghapus favorit
                        location.reload();
                    } else {
                        alert("Gagal melakukan tindakan favorit.");
                    }
                },
                error: function() {
                    alert("Terjadi kesalahan saat menghubungi server.");
                }
            });
        });
    });
</script>