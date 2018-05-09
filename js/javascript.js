/**
 * Created by liswn on 2018/5/9.
 */
;(function ($) {
  $.fn.extend({
    coverPreviewModuleInit: function () {
      var $this = this,
      option ={
        row: $this.attr('data-row') || 10,//雪碧图每列数量
        frames:$this.attr('data-frames') || 10//雪碧图总帧数
      }
      $this.on('mousemove',function (e) {
        var $that = $(this),
          box_width= $that.outerWidth(),
          box_height= $that.outerHeight(),
          currentIndex = Math.floor(e.offsetX/( box_width/option.frames)),
          currentY = Math.floor(currentIndex/option.row),
          currentX = Math.floor(currentIndex-(currentY*option.row))
        $that.css({'background-position': (-currentX*box_width)+'px '+(-currentY*box_height)+'px'})
        $that.find('.cover_progress_bar').css({'width': (e.offsetX/box_width*100)+'%'})
      })


      $this.on('mouseleave',function () {
        var $that = $(this)
        $that.css({'background-position': '0px 0px'})
        $that.find('.cover_progress_bar').css({'width': '0'})
      })
    }
    
  })
})(jQuery)



