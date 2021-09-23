(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[864],{5340:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i={sidebar_label:"LibTorch"},s="LibTorch (PyTorch C++ Frontend)",p={unversionedId:"AI-engineering/LibTorch",id:"AI-engineering/LibTorch",isDocsHomePage:!1,title:"LibTorch (PyTorch C++ Frontend)",description:"LibTorch is the official C++ frontend for Pytorch. However, due to its lack of documentation, I encountered lots of confusions during its use. Some useful tips/tricks are listed here just FYI.",source:"@site/kb/AI-engineering/LibTorch.md",sourceDirName:"AI-engineering",slug:"/AI-engineering/LibTorch",permalink:"/kb/AI-engineering/LibTorch",editUrl:"https://github.com/yechs/website/edit/master/kb/AI-engineering/LibTorch.md",tags:[],version:"current",lastUpdatedAt:1632404453,formattedLastUpdatedAt:"9/23/2021",frontMatter:{sidebar_label:"LibTorch"},sidebar:"kbSidebar",previous:{title:"Introduction \ud83d\udea7",permalink:"/kb/intro"},next:{title:"Cross Compiling in C++",permalink:"/kb/software/cross-compile-c"}},c=[{value:"Performance: slower than Python",id:"performance-slower-than-python",children:[]},{value:"Cross-Save/Load Tensors in Python",id:"cross-saveload-tensors-in-python",children:[{value:"Save tensor in C++ and load in Python",id:"save-tensor-in-c-and-load-in-python",children:[]},{value:"Save tensor in Python and load in C++",id:"save-tensor-in-python-and-load-in-c",children:[]},{value:"Alternative: use pickle",id:"alternative-use-pickle",children:[]}]},{value:"Multiple Input/Output for Inference",id:"multiple-inputoutput-for-inference",children:[]}],l={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"libtorch-pytorch-c-frontend"},"LibTorch (PyTorch C++ Frontend)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pytorch.org/cppdocs/frontend.html"},"LibTorch")," is the official C++ frontend for Pytorch. However, due to its lack of documentation, I encountered lots of confusions during its use. Some useful tips/tricks are listed here just FYI."),(0,a.kt)("p",null,"As of July 2021, this documentation is written based on my experience with libtorch v1.9"),(0,a.kt)("h2",{id:"performance-slower-than-python"},"Performance: slower than Python"),(0,a.kt)("p",null,"It is repeatedly reported that inference using LibTorch is much slower than that in Python. See discussions in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pytorch/pytorch/issues/19106"},"#19106"),"."),(0,a.kt)("p",null,"There is also ",(0,a.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/363319763"},"a ZhiHu article")," (in Chinese) that attempts to analyze this issue in-depth. The solution it proposed was to recompile libtorch by linking to libraries used by pytorch."),(0,a.kt)("h2",{id:"cross-saveload-tensors-in-python"},"Cross-Save/Load Tensors in Python"),(0,a.kt)("p",null,"This section documents how to save tensors in C++ and load them into Python, and vice versa. It is often done for more friendly debugging experience offered by the Python frontend."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Note that LibTorch ",(0,a.kt)("inlineCode",{parentName:"p"},"torch::save()")," function (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pytorch/pytorch/blob/v1.9.0/torch/csrc/api/include/torch/serialize.h#L11-L45"},"source"),") saves the tensors in a wrapped TorchScript (JIT) module, unlike ",(0,a.kt)("inlineCode",{parentName:"p"},"torch.save()")," (",(0,a.kt)("a",{parentName:"p",href:"https://pytorch.org/docs/1.9.0/generated/torch.save.html"},"docs"),") in Python."))),(0,a.kt)("h3",{id:"save-tensor-in-c-and-load-in-python"},"Save tensor in C++ and load in Python"),(0,a.kt)("p",null,"In C++, call ",(0,a.kt)("inlineCode",{parentName:"p"},"torch::save()")," to save."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <torch/torch.h>\n\n// save one tensor\ntorch::save(tensor, "tensor.pt");\n\n// save multiple tensors\ntorch::save({tensora, tensorb, tensorc}, "tensors.pt");\n')),(0,a.kt)("p",null,"In Python, use ",(0,a.kt)("inlineCode",{parentName:"p"},"torch.jit.load()")," to load."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import torch\n\n# Load one tensor\ntensor_model = torch.jit.load("tensor.pt")\ntensor = list(tensor_model.parameters())[0]\n\n# Load multiple tensors\ntensors_model = torch.jit.load("tensors.pt")\ntensora = list(tensors_model.parameters())[0]\ntensorb = list(tensors_model.parameters())[1]\ntensorc = list(tensors_model.parameters())[2]\n')),(0,a.kt)("h3",{id:"save-tensor-in-python-and-load-in-c"},"Save tensor in Python and load in C++"),(0,a.kt)("p",null,"The following codes are adapted from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pytorch/pytorch/issues/20356#issuecomment-545572400"},"pytorch/pytorch#20356 (comment)")," and updated for the v1.8+ API (",(0,a.kt)("inlineCode",{parentName:"p"},"get_attribute")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"attr"),")."),(0,a.kt)("p",null,"Save tensors in Python: to do so, you have to create a model and include all tensors into this TorchScript module."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import torch\n\nclass Container(torch.nn.Module):\n    def __init__(self, my_values):\n        super().__init__()\n        for key in my_values:\n            setattr(self, key, my_values[key])\n\nmy_values = {\n    'a': torch.ones(2, 2),\n    'b': torch.ones(2, 2) + 10,\n    'c': 'hello',\n    'd': 6\n}\n\n# Save arbitrary values supported by TorchScript\n# https://pytorch.org/docs/master/jit.html#supported-type\ncontainer = torch.jit.script(Container(my_values))\ncontainer.save(\"container.pt\")\n")),(0,a.kt)("p",null,"Load tensors in C++"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <torch/script.h>\n\ntorch::jit::script::Module container = torch::jit::load("container.pt");\n\ntorch::Tensor a = container.attr("a").toTensor();\ntorch::Tensor b = container.attr("b").toTensor();\nstd::string c = container.attr("c").toStringRef();\n\nint64_t d = container.attr("d").toInt();\n')),(0,a.kt)("h3",{id:"alternative-use-pickle"},"Alternative: use pickle"),(0,a.kt)("p",null,"An alternative is to use ",(0,a.kt)("inlineCode",{parentName:"p"},"pickle_save")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pickle_load")," (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pytorch/pytorch/blob/v1.9.0/torch/csrc/api/include/torch/serialize.h#L76-L77"},"source"),"). See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pytorch/pytorch/issues/20356#issuecomment-782341150"},"this comment in pytorch/pytorch#20356")," for usage."),(0,a.kt)("h2",{id:"multiple-inputoutput-for-inference"},"Multiple Input/Output for Inference"),(0,a.kt)("p",null,"Suppose we have loaded a model named ",(0,a.kt)("inlineCode",{parentName:"p"},"module")," and want to use it for inference. However, the model requires multiple inputs/outputs."),(0,a.kt)("p",null,"The codes are adapted from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pytorch/pytorch/issues/18337"},"pytorch/pytorch#18337"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<torch::jit::IValue> inputs;\ninputs.push_back(tensora);\ninputs.push_back(tensorb);\n\nauto outputs = module->forward(inputs).toTuple();\n\ntorch::Tensor out1 = outputs->elements()[0].toTensor();\ntorch::Tensor out2 = outputs->elements()[1].toTensor();\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Note: if you only have one output, you can directly call ",(0,a.kt)("inlineCode",{parentName:"p"},"toTensor()")," on the output of ",(0,a.kt)("inlineCode",{parentName:"p"},"forward()"),"."))))}h.isMDXComponent=!0}}]);