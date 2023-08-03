> vue3 + ts + pinia

## Commit Message 规范

### 消息格式

消息必须匹配以下正则表达式:

<!-- prettier-ignore -->
```js
/^(revert: )?(feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps)(\(.+\))?: .{1,50}/
```

#### 示例

出现在`Features`标题下，`dev`子标题下:

```
feat(dev): add 'comments' option
```

出现在`Bug Fixes`标题下，`dev`子标题下，带有禅道问题`#28` 的链接:

```
fix(dev): fix dev error

close #28
```

出现在“性能改进”标题下，并在“重大更改”下给出重大更改解释:

```
perf(build): remove 'foo' option

BREAKING CHANGE: The 'foo' option has been removed.
```

以下提交和`667ecc1`不会出现在更改日志中，如果它们是在同一个版本下。如果没有，恢复提交将出现在`revert`标头下。

```
revert: feat(compiler): add 'comments' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

### 完整的消息格式

一个提交消息包括一个**header**，**body**和**footer**。头文件有**type**，**scope**和**subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

**header** 是必须的, **scope** 是可选的

### Revert

如果提交恢复了之前的提交，它应该以 `revert:`开头，后面跟着被恢复的提交的头部。在 `body` 中，它应该说: `This revert commit <hash>`。其中的哈希值是被还原的提交的哈希。

### Type

如果前缀是`feat`， `fix`或`perf`，它将出现在 `changelog` 中。然而，如果有任何[BREAKING CHANGE](#footer)，提交将始终出现在 `changelog` 中。

其他前缀由您自行决定。建议使用`docs`、`chore`、`style`、`refactor`和`test`作为非变更日志相关任务的前缀。

### Scope

范围可以是任何指定提交更改位置的内容。例如 `dev`, `build`, `workflow`, `cli` 等等...

### Subject

主题包含了对变化的简要描述:

- 使用祈使句，现在时: "change"而不是"changed"或"changes"
- 不要把第一个字母大写
- 末尾没有点(.)

### Body

和 **subject** 一样, 使用祈使句，现在时: "change"而不是"changed"或"changes"，

正文应该包括改变的动机，并将其与之前的行为进行对比。

如果上线`rebase`分支提交信息，需要包含迭代周期信息。如下：

```
release(dev): release 1.0.1

【211213-211220】期：
- feat(dev): xxxx
- fix(build): xxx
```

### Footer

页脚应该包含任何关于**BREAKING CHANGE**的信息，或者是写关于禅道问题关闭的地方。

**Breaking Changes**  应该以 `BREAKING CHANGE:` + 一个空格 + 两个换行开头，其余和完整消息格式一致。
