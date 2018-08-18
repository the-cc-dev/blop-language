let best_failure;
let best_failure_index = 0;
function START_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "START", subRule: 0, type: "START", named}
  let _rule_0 = STATEMENTS(stream, i);
  while(_rule_0) {
    children.push(_rule_0);
    i = _rule_0.last_index;
    _rule_0 = STATEMENTS(stream, i);
  }
  if(stream[i].type !== 'EOS') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'START', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  node.success = i === stream.length; node.last_index = i
  return node
}

function START(stream, index) {
  return START_0(stream, index)
}
function STATEMENTS_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "STATEMENTS", subRule: 0, type: "STATEMENTS", named}
  if(stream[i].type !== 'newline') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'STATEMENTS', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type == 'w') {
    children.push(stream[i]); i++;
  }
  if(stream[i].type == 'W') {
    children.push(stream[i]); i++;
  }
  const _rule_0 = STATEMENT(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function STATEMENTS_1(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "STATEMENTS", subRule: 1, type: "STATEMENTS", named}
  if(stream[i].type !== 'newline') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'STATEMENTS', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type == 'w') {
    children.push(stream[i]); i++;
  }
  if(stream[i].type == 'W') {
    children.push(stream[i]); i++;
  }
  node.success = i === stream.length; node.last_index = i
  return node
}

function STATEMENTS(stream, index) {
  return STATEMENTS_0(stream, index) || STATEMENTS_1(stream, index)
}
function STATEMENT_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "STATEMENT", subRule: 0, type: "STATEMENT", named}
  const _rule_0 = condition(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function STATEMENT_1(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "STATEMENT", subRule: 1, type: "STATEMENT", named}
  const _rule_0 = assign(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function STATEMENT_2(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "STATEMENT", subRule: 2, type: "STATEMENT", named}
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function STATEMENT_3(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "STATEMENT", subRule: 3, type: "STATEMENT", named}
  const _rule_0 = virtual_node(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function STATEMENT_4(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "STATEMENT", subRule: 4, type: "STATEMENT", named}
  if(stream[i].type !== 'return') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'STATEMENT', sub_rule_index: 4, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function STATEMENT(stream, index) {
  return STATEMENT_0(stream, index) || STATEMENT_1(stream, index) || STATEMENT_2(stream, index) || STATEMENT_3(stream, index) || STATEMENT_4(stream, index)
}
function DOTTED_PATH_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "DOTTED_PATH", subRule: 0, type: "DOTTED_PATH", named}
  if(stream[i].type !== 'name') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'DOTTED_PATH', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = func_call(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function DOTTED_PATH_1(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "DOTTED_PATH", subRule: 1, type: "DOTTED_PATH", named}
  if(stream[i].type !== 'name') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'DOTTED_PATH', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== '.') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'DOTTED_PATH', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  let _rule_0 = DOTTED_PATH(stream, i);
  while(_rule_0) {
    children.push(_rule_0);
    i = _rule_0.last_index;
    _rule_0 = DOTTED_PATH(stream, i);
  }
  node.success = i === stream.length; node.last_index = i
  return node
}

function DOTTED_PATH_2(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "DOTTED_PATH", subRule: 2, type: "DOTTED_PATH", named}
  if(stream[i].type !== 'name') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'DOTTED_PATH', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  node.success = i === stream.length; node.last_index = i
  return node
}

function DOTTED_PATH(stream, index) {
  return DOTTED_PATH_0(stream, index) || DOTTED_PATH_1(stream, index) || DOTTED_PATH_2(stream, index)
}
function math_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "math", subRule: 0, type: "math", named}
  if(stream[i].type !== '(') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'math', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = math(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== ')') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'math', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'math', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'operator') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'math', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'math', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_1 = math(stream, i);
  if(!_rule_1) return;
  children.push(_rule_1);
  i = _rule_1.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function math_1(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "math", subRule: 1, type: "math", named}
  if(stream[i].type !== '(') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'math', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = math(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== ')') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'math', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  node.success = i === stream.length; node.last_index = i
  return node
}

function math_2(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "math", subRule: 2, type: "math", named}
  if(stream[i].type !== 'number') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'math', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'math', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'operator') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'math', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'math', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = math(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function math_3(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "math", subRule: 3, type: "math", named}
  if(stream[i].type !== 'number') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'math', sub_rule_index: 3, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  node.success = i === stream.length; node.last_index = i
  return node
}

function math(stream, index) {
  return math_0(stream, index) || math_1(stream, index) || math_2(stream, index) || math_3(stream, index)
}
function assign_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "assign", subRule: 0, type: "assign", named}
  if(stream[i].type !== 'name') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'assign', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
    named['name'] = stream[i]
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'assign', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'explicit_assign') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'assign', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
    named['explicit_assign'] = stream[i]
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'assign', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
    named['exp'] = _rule_0
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function assign_1(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "assign", subRule: 1, type: "assign", named}
  if(stream[i].type !== 'name') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'assign', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
    named['name'] = stream[i]
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'assign', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== '=') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'assign', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'assign', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
    named['exp'] = _rule_0
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function assign_2(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "assign", subRule: 2, type: "assign", named}
  const _rule_0 = DOTTED_PATH(stream, i);
  if(!_rule_0) return;
    named['path'] = _rule_0
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'assign', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== '=') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'assign', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'assign', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_1 = exp(stream, i);
  if(!_rule_1) return;
    named['exp'] = _rule_1
  children.push(_rule_1);
  i = _rule_1.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function assign(stream, index) {
  return assign_0(stream, index) || assign_1(stream, index) || assign_2(stream, index)
}
function func_def_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "func_def", subRule: 0, type: "func_def", named}
  if(stream[i].type !== 'def') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type == 'name') {
    named['name'] = stream[i]
    children.push(stream[i]); i++;
  }
  if(stream[i].type !== '(') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== ')') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = annotation(stream, i);
  if(_rule_0) {
    children.push(_rule_0);
    i = _rule_0.last_index;
  }
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_1 = func_body(stream, i);
  if(!_rule_1) return;
    named['body'] = _rule_1
  children.push(_rule_1);
  i = _rule_1.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function func_def_1(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "func_def", subRule: 1, type: "func_def", named}
  if(stream[i].type !== 'def') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type == 'name') {
    named['name'] = stream[i]
    children.push(stream[i]); i++;
  }
  if(stream[i].type !== '(') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = func_def_params(stream, i);
  if(!_rule_0) return;
    named['params'] = _rule_0
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== ')') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_1 = annotation(stream, i);
  if(_rule_1) {
    children.push(_rule_1);
    i = _rule_1.last_index;
  }
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_2 = func_body(stream, i);
  if(!_rule_2) return;
    named['body'] = _rule_2
  children.push(_rule_2);
  i = _rule_2.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function func_def_2(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "func_def", subRule: 2, type: "func_def", named}
  if(stream[i].type !== '(') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = func_def_params(stream, i);
  if(!_rule_0) return;
    named['params'] = _rule_0
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== ')') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_1 = annotation(stream, i);
  if(_rule_1) {
    children.push(_rule_1);
    i = _rule_1.last_index;
  }
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== '=>') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
    named['fat-arrow'] = stream[i]
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_2 = func_body(stream, i);
  if(!_rule_2) return;
    named['body'] = _rule_2
  children.push(_rule_2);
  i = _rule_2.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function func_def_3(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "func_def", subRule: 3, type: "func_def", named}
  if(stream[i].type !== '(') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def', sub_rule_index: 3, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== ')') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def', sub_rule_index: 3, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = annotation(stream, i);
  if(_rule_0) {
    children.push(_rule_0);
    i = _rule_0.last_index;
  }
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def', sub_rule_index: 3, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== '=>') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def', sub_rule_index: 3, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
    named['fat-arrow'] = stream[i]
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def', sub_rule_index: 3, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_1 = func_body(stream, i);
  if(!_rule_1) return;
    named['body'] = _rule_1
  children.push(_rule_1);
  i = _rule_1.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function func_def(stream, index) {
  return func_def_0(stream, index) || func_def_1(stream, index) || func_def_2(stream, index) || func_def_3(stream, index)
}
function annotation_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "annotation", subRule: 0, type: "annotation", named}
  if(stream[i].type !== 'colon') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'annotation', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'annotation', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'name') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'annotation', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  node.success = i === stream.length; node.last_index = i
  return node
}

function annotation(stream, index) {
  return annotation_0(stream, index)
}
function func_def_params_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "func_def_params", subRule: 0, type: "func_def_params", named}
  if(stream[i].type !== 'name') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def_params', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== '=') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def_params', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  const _rule_1 = annotation(stream, i);
  if(_rule_1) {
    children.push(_rule_1);
    i = _rule_1.last_index;
  }
  if(stream[i].type !== ',') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def_params', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def_params', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_2 = func_def_params(stream, i);
  if(!_rule_2) return;
  children.push(_rule_2);
  i = _rule_2.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function func_def_params_1(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "func_def_params", subRule: 1, type: "func_def_params", named}
  if(stream[i].type !== 'name') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def_params', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== '=') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def_params', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  const _rule_1 = annotation(stream, i);
  if(_rule_1) {
    children.push(_rule_1);
    i = _rule_1.last_index;
  }
  node.success = i === stream.length; node.last_index = i
  return node
}

function func_def_params_2(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "func_def_params", subRule: 2, type: "func_def_params", named}
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  const _rule_1 = annotation(stream, i);
  if(_rule_1) {
    children.push(_rule_1);
    i = _rule_1.last_index;
  }
  if(stream[i].type !== ',') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def_params', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_def_params', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_2 = func_def_params(stream, i);
  if(!_rule_2) return;
  children.push(_rule_2);
  i = _rule_2.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function func_def_params_3(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "func_def_params", subRule: 3, type: "func_def_params", named}
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  const _rule_1 = annotation(stream, i);
  if(_rule_1) {
    children.push(_rule_1);
    i = _rule_1.last_index;
  }
  node.success = i === stream.length; node.last_index = i
  return node
}

function func_def_params(stream, index) {
  return func_def_params_0(stream, index) || func_def_params_1(stream, index) || func_def_params_2(stream, index) || func_def_params_3(stream, index)
}
function func_call_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "func_call", subRule: 0, type: "func_call", named}
  if(stream[i].type !== '(') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_call', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== ')') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_call', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== '.') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_call', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = DOTTED_PATH(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function func_call_1(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "func_call", subRule: 1, type: "func_call", named}
  if(stream[i].type !== '(') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_call', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = func_call_params(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== ')') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_call', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== '.') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_call', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_1 = DOTTED_PATH(stream, i);
  if(!_rule_1) return;
  children.push(_rule_1);
  i = _rule_1.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function func_call_2(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "func_call", subRule: 2, type: "func_call", named}
  if(stream[i].type !== '(') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_call', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== ')') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_call', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = func_call(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function func_call_3(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "func_call", subRule: 3, type: "func_call", named}
  if(stream[i].type !== '(') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_call', sub_rule_index: 3, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = func_call_params(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== ')') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_call', sub_rule_index: 3, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_1 = func_call(stream, i);
  if(!_rule_1) return;
  children.push(_rule_1);
  i = _rule_1.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function func_call_4(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "func_call", subRule: 4, type: "func_call", named}
  if(stream[i].type !== '(') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_call', sub_rule_index: 4, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== ')') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_call', sub_rule_index: 4, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  node.success = i === stream.length; node.last_index = i
  return node
}

function func_call_5(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "func_call", subRule: 5, type: "func_call", named}
  if(stream[i].type !== '(') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_call', sub_rule_index: 5, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = func_call_params(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== ')') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_call', sub_rule_index: 5, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  node.success = i === stream.length; node.last_index = i
  return node
}

function func_call(stream, index) {
  return func_call_0(stream, index) || func_call_1(stream, index) || func_call_2(stream, index) || func_call_3(stream, index) || func_call_4(stream, index) || func_call_5(stream, index)
}
function func_call_params_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "func_call_params", subRule: 0, type: "func_call_params", named}
  if(stream[i].type !== 'name') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_call_params', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== '=') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_call_params', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function func_call_params_1(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "func_call_params", subRule: 1, type: "func_call_params", named}
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== ',') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_call_params', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_call_params', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_1 = func_call_params(stream, i);
  if(!_rule_1) return;
  children.push(_rule_1);
  i = _rule_1.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function func_call_params_2(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "func_call_params", subRule: 2, type: "func_call_params", named}
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function func_call_params(stream, index) {
  return func_call_params_0(stream, index) || func_call_params_1(stream, index) || func_call_params_2(stream, index)
}
function func_body_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "func_body", subRule: 0, type: "func_body", named}
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
    named['exp'] = _rule_0
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function func_body_1(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "func_body", subRule: 1, type: "func_body", named}
  if(stream[i].type !== '{') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_body', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  let _rule_0 = STATEMENTS(stream, i);
  while(_rule_0) {
    named['stats'] ? null : named['stats'] = []
    named['stats'].push(_rule_0)
    children.push(_rule_0);
    i = _rule_0.last_index;
    _rule_0 = STATEMENTS(stream, i);
  }
  if(stream[i].type !== '}') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'func_body', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  node.success = i === stream.length; node.last_index = i
  return node
}

function func_body(stream, index) {
  return func_body_0(stream, index) || func_body_1(stream, index)
}
function array_literal_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "array_literal", subRule: 0, type: "array_literal", named}
  if(stream[i].type !== '[') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'array_literal', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type == 'newline') {
    children.push(stream[i]); i++;
  }
  if(stream[i].type == 'W') {
    children.push(stream[i]); i++;
  }
  const _rule_0 = array_literal_body(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== ']') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'array_literal', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  node.success = i === stream.length; node.last_index = i
  return node
}

function array_literal_1(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "array_literal", subRule: 1, type: "array_literal", named}
  if(stream[i].type !== '[') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'array_literal', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== ']') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'array_literal', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  node.success = i === stream.length; node.last_index = i
  return node
}

function array_literal(stream, index) {
  return array_literal_0(stream, index) || array_literal_1(stream, index)
}
function array_literal_body_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "array_literal_body", subRule: 0, type: "array_literal_body", named}
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== ',') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'array_literal_body', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'array_literal_body', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type == 'newline') {
    children.push(stream[i]); i++;
  }
  if(stream[i].type == 'W') {
    children.push(stream[i]); i++;
  }
  const _rule_1 = array_literal_body(stream, i);
  if(!_rule_1) return;
  children.push(_rule_1);
  i = _rule_1.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function array_literal_body_1(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "array_literal_body", subRule: 1, type: "array_literal_body", named}
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function array_literal_body(stream, index) {
  return array_literal_body_0(stream, index) || array_literal_body_1(stream, index)
}
function condition_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "condition", subRule: 0, type: "condition", named}
  if(stream[i].type !== 'if') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'condition', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
    named['type'] = stream[i]
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
    named['exp'] = _rule_0
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'condition', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== '{') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'condition', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  let _rule_1 = STATEMENTS(stream, i);
  while(_rule_1) {
    named['stats'] ? null : named['stats'] = []
    named['stats'].push(_rule_1)
    children.push(_rule_1);
    i = _rule_1.last_index;
    _rule_1 = STATEMENTS(stream, i);
  }
  if(stream[i].type !== '}') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'condition', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_2 = conditionelseif(stream, i);
  if(!_rule_2) return;
    named['elseif'] = _rule_2
  children.push(_rule_2);
  i = _rule_2.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function condition(stream, index) {
  return condition_0(stream, index)
}
function conditionelseif_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "conditionelseif", subRule: 0, type: "conditionelseif", named}
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'conditionelseif', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'elseif') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'conditionelseif', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
    named['type'] = stream[i]
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
    named['exp'] = _rule_0
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'conditionelseif', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== '{') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'conditionelseif', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  let _rule_1 = STATEMENTS(stream, i);
  while(_rule_1) {
    named['stats'] ? null : named['stats'] = []
    named['stats'].push(_rule_1)
    children.push(_rule_1);
    i = _rule_1.last_index;
    _rule_1 = STATEMENTS(stream, i);
  }
  if(stream[i].type !== '}') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'conditionelseif', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_2 = conditionelseif(stream, i);
  if(!_rule_2) return;
    named['elseif'] = _rule_2
  children.push(_rule_2);
  i = _rule_2.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function conditionelseif_1(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "conditionelseif", subRule: 1, type: "conditionelseif", named}
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'conditionelseif', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'elseif') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'conditionelseif', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
    named['type'] = stream[i]
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
    named['exp'] = _rule_0
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'conditionelseif', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== '{') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'conditionelseif', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  let _rule_1 = STATEMENTS(stream, i);
  while(_rule_1) {
    named['stats'] ? null : named['stats'] = []
    named['stats'].push(_rule_1)
    children.push(_rule_1);
    i = _rule_1.last_index;
    _rule_1 = STATEMENTS(stream, i);
  }
  if(stream[i].type !== '}') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'conditionelseif', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  node.success = i === stream.length; node.last_index = i
  return node
}

function conditionelseif_2(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "conditionelseif", subRule: 2, type: "conditionelseif", named}
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'conditionelseif', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'else') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'conditionelseif', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
    named['type'] = stream[i]
  children.push(stream[i]); i++;
  if(stream[i].type !== '{') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'conditionelseif', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  let _rule_0 = STATEMENTS(stream, i);
  while(_rule_0) {
    named['stats'] ? null : named['stats'] = []
    named['stats'].push(_rule_0)
    children.push(_rule_0);
    i = _rule_0.last_index;
    _rule_0 = STATEMENTS(stream, i);
  }
  if(stream[i].type !== '}') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'conditionelseif', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  node.success = i === stream.length; node.last_index = i
  return node
}

function conditionelseif_3(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "conditionelseif", subRule: 3, type: "conditionelseif", named}
  if(stream[i].type == 'w') {
    children.push(stream[i]); i++;
  }
  node.success = i === stream.length; node.last_index = i
  return node
}

function conditionelseif(stream, index) {
  return conditionelseif_0(stream, index) || conditionelseif_1(stream, index) || conditionelseif_2(stream, index) || conditionelseif_3(stream, index)
}
function object_literal_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "object_literal", subRule: 0, type: "object_literal", named}
  if(stream[i].type !== '{') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'object_literal', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type == 'newline') {
    children.push(stream[i]); i++;
  }
  if(stream[i].type == 'w') {
    children.push(stream[i]); i++;
  }
  if(stream[i].type == 'W') {
    children.push(stream[i]); i++;
  }
  const _rule_0 = object_literal_body(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== '}') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'object_literal', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  node.success = i === stream.length; node.last_index = i
  return node
}

function object_literal(stream, index) {
  return object_literal_0(stream, index)
}
function object_literal_body_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "object_literal_body", subRule: 0, type: "object_literal_body", named}
  if(stream[i].type !== 'str') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'object_literal_body', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'colon') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'object_literal_body', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'object_literal_body', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type == 'w') {
    children.push(stream[i]); i++;
  }
  if(stream[i].type == 'W') {
    children.push(stream[i]); i++;
  }
  if(stream[i].type !== ',') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'object_literal_body', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type == 'newline') {
    children.push(stream[i]); i++;
  }
  if(stream[i].type == 'w') {
    children.push(stream[i]); i++;
  }
  if(stream[i].type == 'W') {
    children.push(stream[i]); i++;
  }
  const _rule_1 = object_literal_body(stream, i);
  if(!_rule_1) return;
  children.push(_rule_1);
  i = _rule_1.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function object_literal_body_1(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "object_literal_body", subRule: 1, type: "object_literal_body", named}
  if(stream[i].type !== 'str') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'object_literal_body', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'colon') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'object_literal_body', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'object_literal_body', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type == 'newline') {
    children.push(stream[i]); i++;
  }
  if(stream[i].type == 'w') {
    children.push(stream[i]); i++;
  }
  if(stream[i].type == 'W') {
    children.push(stream[i]); i++;
  }
  node.success = i === stream.length; node.last_index = i
  return node
}

function object_literal_body(stream, index) {
  return object_literal_body_0(stream, index) || object_literal_body_1(stream, index)
}
function virtual_node_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "virtual_node", subRule: 0, type: "virtual_node", named}
  if(stream[i].type !== '<') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'name') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
    named['opening'] = stream[i]
  children.push(stream[i]); i++;
  let _rule_0 = virtual_node_attributes(stream, i);
  while(_rule_0) {
    named['attrs'] ? null : named['attrs'] = []
    named['attrs'].push(_rule_0)
    children.push(_rule_0);
    i = _rule_0.last_index;
    _rule_0 = virtual_node_attributes(stream, i);
  }
  if(stream[i].type == 'w') {
    children.push(stream[i]); i++;
  }
  if(stream[i].type !== '/') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== '>') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  node.success = i === stream.length; node.last_index = i
  return node
}

function virtual_node_1(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "virtual_node", subRule: 1, type: "virtual_node", named}
  if(stream[i].type !== '<') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'name') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
    named['opening'] = stream[i]
  children.push(stream[i]); i++;
  let _rule_0 = virtual_node_attributes(stream, i);
  while(_rule_0) {
    named['attrs'] ? null : named['attrs'] = []
    named['attrs'].push(_rule_0)
    children.push(_rule_0);
    i = _rule_0.last_index;
    _rule_0 = virtual_node_attributes(stream, i);
  }
  if(stream[i].type !== '>') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  let _rule_1 = STATEMENTS(stream, i);
  while(_rule_1) {
    named['stats'] ? null : named['stats'] = []
    named['stats'].push(_rule_1)
    children.push(_rule_1);
    i = _rule_1.last_index;
    _rule_1 = STATEMENTS(stream, i);
  }
  if(stream[i].type !== '<') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== '/') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'name') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
    named['closing'] = stream[i]
  children.push(stream[i]); i++;
  if(stream[i].type !== '>') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
if(!((node) => node.named.opening.value === node.named.closing.value)(node)){ return }
  node.success = i === stream.length; node.last_index = i
  return node
}

function virtual_node_2(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "virtual_node", subRule: 2, type: "virtual_node", named}
  if(stream[i].type !== '<') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'name') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
    named['opening'] = stream[i]
  children.push(stream[i]); i++;
  let _rule_0 = virtual_node_attributes(stream, i);
  while(_rule_0) {
    named['attrs'] ? null : named['attrs'] = []
    named['attrs'].push(_rule_0)
    children.push(_rule_0);
    i = _rule_0.last_index;
    _rule_0 = virtual_node_attributes(stream, i);
  }
  if(stream[i].type !== '>') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_1 = exp(stream, i);
  if(!_rule_1) return;
    named['exp'] = _rule_1
  children.push(_rule_1);
  i = _rule_1.last_index;
  if(stream[i].type !== '<') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== '/') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'name') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
    named['closing'] = stream[i]
  children.push(stream[i]); i++;
  if(stream[i].type !== '>') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
if(!((node) => node.named.opening.value === node.named.closing.value)(node)){ return }
  node.success = i === stream.length; node.last_index = i
  return node
}

function virtual_node(stream, index) {
  return virtual_node_0(stream, index) || virtual_node_1(stream, index) || virtual_node_2(stream, index)
}
function virtual_node_assign_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "virtual_node_assign", subRule: 0, type: "virtual_node_assign", named}
  if(stream[i].type !== '=') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node_assign', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node_assign', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
    named['exp'] = _rule_0
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function virtual_node_assign(stream, index) {
  return virtual_node_assign_0(stream, index)
}
function virtual_node_attributes_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "virtual_node_attributes", subRule: 0, type: "virtual_node_attributes", named}
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node_attributes', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'name') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node_attributes', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
    named['name'] = stream[i]
  children.push(stream[i]); i++;
  if(stream[i].type !== '=') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'virtual_node_attributes', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
    named['exp'] = _rule_0
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function virtual_node_attributes(stream, index) {
  return virtual_node_attributes_0(stream, index)
}
function operation_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "operation", subRule: 0, type: "operation", named}
  if(stream[i].type !== 'operator') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'operation', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'operation', sub_rule_index: 0, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function operation_1(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "operation", subRule: 1, type: "operation", named}
  if(stream[i].type !== '==') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'operation', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'operation', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function operation_2(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "operation", subRule: 2, type: "operation", named}
  if(stream[i].type !== '=>') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'operation', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'operation', sub_rule_index: 2, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function operation_3(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "operation", subRule: 3, type: "operation", named}
  if(stream[i].type !== '<=') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'operation', sub_rule_index: 3, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'operation', sub_rule_index: 3, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function operation_4(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "operation", subRule: 4, type: "operation", named}
  if(stream[i].type !== '>') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'operation', sub_rule_index: 4, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'operation', sub_rule_index: 4, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function operation_5(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "operation", subRule: 5, type: "operation", named}
  if(stream[i].type !== '<') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'operation', sub_rule_index: 5, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'operation', sub_rule_index: 5, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function operation(stream, index) {
  return operation_0(stream, index) || operation_1(stream, index) || operation_2(stream, index) || operation_3(stream, index) || operation_4(stream, index) || operation_5(stream, index)
}
function exp_0(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "exp", subRule: 0, type: "exp", named}
  const _rule_0 = func_def(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function exp_1(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "exp", subRule: 1, type: "exp", named}
  const _rule_0 = DOTTED_PATH(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'exp', sub_rule_index: 1, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_1 = operation(stream, i);
  if(!_rule_1) return;
  children.push(_rule_1);
  i = _rule_1.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function exp_2(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "exp", subRule: 2, type: "exp", named}
  const _rule_0 = DOTTED_PATH(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function exp_3(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "exp", subRule: 3, type: "exp", named}
  const _rule_0 = math(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'exp', sub_rule_index: 3, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_1 = operation(stream, i);
  if(!_rule_1) return;
  children.push(_rule_1);
  i = _rule_1.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function exp_4(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "exp", subRule: 4, type: "exp", named}
  const _rule_0 = math(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function exp_5(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "exp", subRule: 5, type: "exp", named}
  if(stream[i].type !== 'str') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'exp', sub_rule_index: 5, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== 'w') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'exp', sub_rule_index: 5, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = operation(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function exp_6(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "exp", subRule: 6, type: "exp", named}
  if(stream[i].type !== 'str') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'exp', sub_rule_index: 6, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  node.success = i === stream.length; node.last_index = i
  return node
}

function exp_7(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "exp", subRule: 7, type: "exp", named}
  if(stream[i].type !== '(') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'exp', sub_rule_index: 7, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== ')') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'exp', sub_rule_index: 7, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_1 = func_call(stream, i);
  if(!_rule_1) return;
  children.push(_rule_1);
  i = _rule_1.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function exp_8(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "exp", subRule: 8, type: "exp", named}
  if(stream[i].type !== '(') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'exp', sub_rule_index: 8, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== ')') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'exp', sub_rule_index: 8, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  if(stream[i].type !== '.') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'exp', sub_rule_index: 8, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_1 = DOTTED_PATH(stream, i);
  if(!_rule_1) return;
  children.push(_rule_1);
  i = _rule_1.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function exp_9(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "exp", subRule: 9, type: "exp", named}
  if(stream[i].type !== '(') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'exp', sub_rule_index: 9, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  if(stream[i].type !== ')') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'exp', sub_rule_index: 9, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  node.success = i === stream.length; node.last_index = i
  return node
}

function exp_10(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "exp", subRule: 10, type: "exp", named}
  const _rule_0 = object_literal(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function exp_11(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "exp", subRule: 11, type: "exp", named}
  const _rule_0 = array_literal(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function exp_12(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "exp", subRule: 12, type: "exp", named}
  const _rule_0 = virtual_node_assign(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function exp_13(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "exp", subRule: 13, type: "exp", named}
  if(stream[i].type !== 'new') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'exp', sub_rule_index: 13, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function exp_14(stream, index) {
  let i = index;
  let children = [];
  let named = {};
  let node = {children, stream_index: index, name: "exp", subRule: 14, type: "exp", named}
  if(stream[i].type !== 'throw') {
    if(i > best_failure_index) {
      best_failure = {rule_name: 'exp', sub_rule_index: 14, sub_rule_token_index: i - index, stream_index: i, token: stream[i], success: false}
      best_failure_index = i
     }
     return;
  }
  children.push(stream[i]); i++;
  const _rule_0 = exp(stream, i);
  if(!_rule_0) return;
  children.push(_rule_0);
  i = _rule_0.last_index;
  node.success = i === stream.length; node.last_index = i
  return node
}

function exp(stream, index) {
  return exp_0(stream, index) || exp_1(stream, index) || exp_2(stream, index) || exp_3(stream, index) || exp_4(stream, index) || exp_5(stream, index) || exp_6(stream, index) || exp_7(stream, index) || exp_8(stream, index) || exp_9(stream, index) || exp_10(stream, index) || exp_11(stream, index) || exp_12(stream, index) || exp_13(stream, index) || exp_14(stream, index)
}
function _tokenize(tokenDef, input, stream) {
  match = input.match(tokenDef.number.reg);
  if(match !== null) {
   return [match[0], `number`];
  }
  match = input.match(tokenDef.operator.reg);
  if(match !== null) {
   return [match[0], `operator`];
  }
  if(input.startsWith(`def `)) {
   return [`def `, `def`];
  }
  if(input.startsWith(`new `)) {
   return [`new `, `new`];
  }
  if(input.startsWith(`if `)) {
   return [`if `, `if`];
  }
  if(input.startsWith(`else `)) {
   return [`else `, `else`];
  }
  if(input.startsWith(`elseif `)) {
   return [`elseif `, `elseif`];
  }
  if(input.startsWith(`return `)) {
   return [`return `, `return`];
  }
  if(input.startsWith(`throw `)) {
   return [`throw `, `throw`];
  }
  match = input.match(tokenDef.name.reg);
  if(match !== null) {
   return [match[0], `name`];
  }
  if(input.startsWith(`,`)) {
   return [`,`, `,`];
  }
  if(input.startsWith(`.`)) {
   return [`.`, `.`];
  }
  if(input.startsWith(`(`)) {
   return [`(`, `(`];
  }
  if(input.startsWith(`)`)) {
   return [`)`, `)`];
  }
  if(input.startsWith(`{`)) {
   return [`{`, `{`];
  }
  if(input.startsWith(`}`)) {
   return [`}`, `}`];
  }
  if(input.startsWith(`/`)) {
   return [`/`, `/`];
  }
  if(input.startsWith(`[`)) {
   return [`[`, `[`];
  }
  if(input.startsWith(`]`)) {
   return [`]`, `]`];
  }
  if(input.startsWith(`=>`)) {
   return [`=>`, `=>`];
  }
  if(input.startsWith(`<=`)) {
   return [`<=`, `<=`];
  }
  if(input.startsWith(`==`)) {
   return [`==`, `==`];
  }
  if(input.startsWith(`>`)) {
   return [`>`, `>`];
  }
  if(input.startsWith(`<`)) {
   return [`<`, `<`];
  }
  if(input.startsWith(`:=`)) {
   return [`:=`, `explicit_assign`];
  }
  if(input.startsWith(`=`)) {
   return [`=`, `=`];
  }
  if(input.startsWith(`:`)) {
   return [`:`, `colon`];
  }
  if(input.startsWith(`
`)) {
   return [`
`, `newline`];
  }
  match = tokenDef.str.func(input, stream);
  if(match !== undefined) {
   return [match, `str`];
  }
  match = tokenDef.w.func(input, stream);
  if(match !== undefined) {
   return [match, `w`];
  }
  match = input.match(tokenDef.W.reg);
  if(match !== null) {
   return [match[0], `W`];
  }
  return null
}
function tokenize(tokenDef, input) {
  let stream = [], lastToken, i, key, candidate=null, match, token
  let len = input.length;
  let char = 0
  let index = 0
  while(char < len) {
    [candidate, key] = _tokenize(tokenDef, input, stream);
    if(candidate !== null) {
      lastToken = {type:key, value:candidate, start:char, index:index, len:candidate.length};
      stream.push(lastToken);
      index++;
      char += candidate.length;
      input = input.substr(candidate.length);
    } else {
      if(stream.length === 0) {
        throw new Error("Tokenizer error: total match failure");
      }
      if(lastToken) {
        lastToken.pointer += lastToken.value.length;
      }
      let msg = "Tokenizer error, no matching token found";
      if(lastToken) {
        msg += "Before token of type " + lastToken.type + ": " + lastToken.value;
      }
      throw new Error(msg);
    }
  }
  stream.push({type:'EOS', value:'<End Of Stream>', char:char, index: index});
  return stream
};

module.exports = {
    parse: (stream) => {
      const result = START(stream, 0)
      if(!result) {
        return best_failure;
      }
      return result;
    },
    tokenize
}