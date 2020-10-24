const NextFoucsMixin = {
  methods: {
    nextFocus(event, index) {
      let dom = document.getElementsByTagName("textarea");
      let currInput = dom[index];
      let nextInput = dom[index + 1];
      let lastInput = dom[index - 1];
      // console.log(event, dom, currInput, nextInput, lastInput)
      if (event.key === "Enter") {
        // console.log(nextInput);
        event.preventDefault();
        nextInput.focus();
      }
      if (event.key === "ArrowUp") {
        lastInput.setSelectionRange(this.cursorStart, this.cursorStart);
        setTimeout(() => {
          lastInput.focus();
        }, 100);
      }
      if (event.key === "ArrowDown") {
        nextInput.setSelectionRange(this.cursorStart, this.cursorStart);
        setTimeout(() => {
          nextInput.focus();
        }, 100);
      }
      if (event.key === "Delete" || event.key === "Backspace") {
        if (
          currInput.value == "" &&
          this.currentPageBlocks.length > 1 &&
          this.isEmptyDelete == true
        ) {
          this.currentPageBlocks.splice(index, 1);
          lastInput.focus();
        }
      }
      // 设置当前输入框是否为空，主要控制如果已经输入了内容，再点击删除，会直接删除掉内容
      // 处理是否为空的时候在删除内容，直接就currInput.value 会伴随着删除按钮的而直接变化掉
      // 如果已经有内容了，再点击删除按钮会把是否为空删除设置为false，如果直接删除，则是可以的
      // 逻辑就是要先确定一步是否为空，不能同步进行
      if (currInput.value == "") {
        this.isEmptyDelete = true;
      } else {
        this.isEmptyDelete = false;
      }
    },
  },
}

export default NextFoucsMixin