(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[152],{2884:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return l}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i={sidebar_label:"LibTorch"},s="LibTorch (PyTorch C++ \u524d\u7aef)",c={unversionedId:"AI-engineering/LibTorch",id:"AI-engineering/LibTorch",isDocsHomePage:!1,title:"LibTorch (PyTorch C++ \u524d\u7aef)",description:"LibTorch \u662f Pytorch \u5b98\u65b9\u7684 C++ \u524d\u7aef\u3002\u7136\u800c\uff0c\u56e0\u4e3a\u5b83\u51e0\u4e4e\u6ca1\u5565\u6587\u6863\uff0c\u6211\u5728\u7528\u5b83\u7684\u8fc7\u7a0b\u4e2d\uff08\u88ab\u8feb\uff09\u4e00\u8fb9\u8bfb\u6e90\u7801\u53c8\u4e00\u8fb9\u8e29\u4e86\u4e0d\u5c11\u5751\u3002\u4e8e\u662f\u6211\u6253\u7b97\u628a\u8e29\u8fc7\u7684\u4e00\u4e9b\u5751/\u6709\u7528\u7684 tricks \u8bb0\u5f55\u4e0b\u6765\u4ee5\u4f9b\u53c2\u8003\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/AI-engineering/LibTorch.md",sourceDirName:"AI-engineering",slug:"/AI-engineering/LibTorch",permalink:"/zh-Hans/kb/AI-engineering/LibTorch",editUrl:"https://github.com/yechs/website/edit/master/kb/AI-engineering/LibTorch.md",version:"current",lastUpdatedAt:1628398453,formattedLastUpdatedAt:"2021/8/8",frontMatter:{sidebar_label:"LibTorch"},sidebar:"kbSidebar",previous:{title:"\u5f15\u8a00 \ud83d\udea7",permalink:"/zh-Hans/kb/intro"},next:{title:"Cross Compiling in C++",permalink:"/zh-Hans/kb/software/cross-compile-c"}},p=[{value:"\u6027\u80fd\uff1a\u6bd4 Pytorch \u66f4\u6162",id:"performance-slower-than-python",children:[]},{value:"\u517c\u5bb9 Python \u4e2d\u8bfb/\u5199 Tensor",id:"cross-saveload-tensors-in-python",children:[{value:"\u5728 C++ \u4e2d\u4fdd\u5b58 tensor \u5e76\u5728 Python \u4e2d\u8bfb\u53d6",id:"save-tensor-in-c-and-load-in-python",children:[]},{value:"\u5728 Python \u4e2d\u4fdd\u5b58 tensor \u5e76\u5728 C++ \u4e2d\u8bfb\u53d6",id:"save-tensor-in-python-and-load-in-c",children:[]},{value:"\u5907\u9009\u65b9\u6848\uff1a\u4f7f\u7528 pickle",id:"alternative-use-pickle",children:[]}]},{value:"\u63a8\u7406\u65f6\u8f93\u5165/\u8f93\u51fa\u591a\u4e2a tensor",id:"multiple-inputoutput-for-inference",children:[]}],h={toc:p};function l(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"libtorch-pytorch-c-\u524d\u7aef"},"LibTorch (PyTorch C++ \u524d\u7aef)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pytorch.org/cppdocs/frontend.html"},"LibTorch")," \u662f Pytorch \u5b98\u65b9\u7684 C++ \u524d\u7aef\u3002\u7136\u800c\uff0c\u56e0\u4e3a\u5b83\u51e0\u4e4e\u6ca1\u5565\u6587\u6863\uff0c\u6211\u5728\u7528\u5b83\u7684\u8fc7\u7a0b\u4e2d\uff08\u88ab\u8feb\uff09\u4e00\u8fb9\u8bfb\u6e90\u7801\u53c8\u4e00\u8fb9\u8e29\u4e86\u4e0d\u5c11\u5751\u3002\u4e8e\u662f\u6211\u6253\u7b97\u628a\u8e29\u8fc7\u7684\u4e00\u4e9b\u5751/\u6709\u7528\u7684 tricks \u8bb0\u5f55\u4e0b\u6765\u4ee5\u4f9b\u53c2\u8003\u3002"),(0,a.kt)("p",null,"\u622a\u81f3 2021 \u5e74 7 \u6708\uff0c\u8fd9\u4efd\u6587\u6863\u662f\u57fa\u4e8e\u6211\u4f7f\u7528 libtorch v1.9 \u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7684\u7ecf\u9a8c\u5199\u6210\u7684\u3002"),(0,a.kt)("h2",{id:"performance-slower-than-python"},"\u6027\u80fd\uff1a\u6bd4 Pytorch \u66f4\u6162"),(0,a.kt)("p",null,"\u8bb8\u591a\u7528\u6237\u90fd\u62a5\u544a\u8fc7\u4f7f\u7528 LibTorch \u8fdb\u884c\u63a8\u7406\u7684\u901f\u5ea6\u8981\u8fdc\u8fdc\u6bd4 \u4f7f\u7528 Python \u4e2d\u7684 Pytorch \u66f4\u6162\u3002\u53ef\u4ee5\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pytorch/pytorch/issues/19106"},"#19106")," \u4e2d\u7684\u8ba8\u8bba\u3002"),(0,a.kt)("p",null,"\u540c\u65f6\uff0c\u6709\u4e00\u7bc7 ",(0,a.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/363319763"},"\u77e5\u4e4e\u6587\u7ae0")," \u5bf9\u6b64\u8fdb\u884c\u4e86\u6df1\u5165\u7684\u5206\u6790\uff0c\u5e76\u63d0\u51fa\u89e3\u51b3\u65b9\u6848\uff1a\u94fe\u63a5 Pytorch \u4f7f\u7528\u7684 libraries \u4e4b\u540e\u91cd\u65b0\u7f16\u8bd1 libtorch\u3002"),(0,a.kt)("h2",{id:"cross-saveload-tensors-in-python"},"\u517c\u5bb9 Python \u4e2d\u8bfb/\u5199 Tensor"),(0,a.kt)("p",null,"\u8fd9\u4e00\u90e8\u5206\u8bb2\u8ff0\u4e86\u5982\u4f55\u5728 C++ \u4e2d\u4fdd\u5b58 tensor \u5e76\u5728 Python \u4e2d\u8bfb\u53d6\uff1b\u4ee5\u53ca\u5982\u4f55\u5728 Python \u4e2d\u4fdd\u5b58 tensor \u540e\u5728 C++ \u4e2d\u8bfb\u53d6\u3002\u8fd9\u5bf9\u4e8e\u7a0b\u5e8f\u8c03\u8bd5\u6765\u8bf4\u5f88\u6709\u7528\uff08\u56e0\u4e3a libtorch \u7684\u8c03\u8bd5\u8fc7\u7a0b\u548c\u62a5\u9519\u4fe1\u606f\u5b9e\u5728\u662f\u8fc7\u4e8e\u4e0d\u53cb\u597d\u4e86\u2026\u2026\uff09"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u6ce8\u610f\uff1a LibTorch \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"torch::save()")," \u51fd\u6570 (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pytorch/pytorch/blob/v1.9.0/torch/csrc/api/include/torch/serialize.h#L11-L45"},"source"),") \u4f1a\u5c06 tensors \u4fdd\u5b58\u4e3a\u4e00\u4e2a TorchScript (JIT) \u7684 module\uff0c\u800c\u4e0d\u50cf Python \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"torch.save()")," (",(0,a.kt)("a",{parentName:"p",href:"https://pytorch.org/docs/1.9.0/generated/torch.save.html"},"docs"),") \u51fd\u6570\u76f4\u63a5\u4fdd\u5b58 tensor\u3002"))),(0,a.kt)("h3",{id:"save-tensor-in-c-and-load-in-python"},"\u5728 C++ \u4e2d\u4fdd\u5b58 tensor \u5e76\u5728 Python \u4e2d\u8bfb\u53d6"),(0,a.kt)("p",null,"\u5728 C++\u4e2d\uff0c\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"torch::save()")," \u8fdb\u884c\u4fdd\u5b58\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <torch/torch.h>\n\n// \u4fdd\u5b58\u5355\u4e2a tensor\ntorch::save(tensor, "tensor.pt");\n\n// \u4fdd\u5b58\u591a\u4e2a tensors\ntorch::save({tensora, tensorb, tensorc}, "tensors.pt");\n')),(0,a.kt)("p",null,"\u5728 Python \u4e2d\uff0c\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"torch.jit.load()")," \u8fdb\u884c\u8bfb\u53d6\u5e76\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"parameters")," \u83b7\u53d6\u5b58\u50a8\u5728 module \u4e2d\u7684 tensor\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import torch\n\n# \u8bfb\u53d6\u5355\u4e2a tensor\ntensor_model = torch.jit.load("tensor.pt")\ntensor = list(tensor_model.parameters())[0]\n\n# \u8bfb\u53d6\u591a\u4e2a tensor\ntensors_model = torch.jit.load("tensors.pt")\ntensora = list(tensors_model.parameters())[0]\ntensorb = list(tensors_model.parameters())[1]\ntensorc = list(tensors_model.parameters())[2]\n')),(0,a.kt)("h3",{id:"save-tensor-in-python-and-load-in-c"},"\u5728 Python \u4e2d\u4fdd\u5b58 tensor \u5e76\u5728 C++ \u4e2d\u8bfb\u53d6"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u7684\u4ee3\u7801\u662f\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pytorch/pytorch/issues/20356#issuecomment-545572400"},"pytorch/pytorch#20356 (comment)")," \u4e2d\u6539\u7f16\u800c\u6765\uff0c\u5e76\u6839\u636e LibTorch v1.8+ API \u53d8\u5316\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"get_attribute")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"attr"),"\uff09\u6709\u6240\u4fee\u6539\u3002"),(0,a.kt)("p",null,"\u5728 Python \u4e2d\u4fdd\u5b58 tensor\uff1a\u4f60\u9700\u8981\u521b\u5efa\u4e00\u4e2a model \u5e76\u628a\u6240\u6709\u9700\u8981\u4fdd\u5b58\u7684 tensor \u52a0\u8f7d\u5230\u8fd9\u4e2a TorchScript module \u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import torch\n\nclass Container(torch.nn.Module):\n    def __init__(self, my_values):\n        super().__init__()\n        for key in my_values:\n            setattr(self, key, my_values[key])\n\nmy_values = {\n    'a': torch.ones(2, 2),\n    'b': torch.ones(2, 2) + 10,\n    'c': 'hello',\n    'd': 6\n}\n\n# Save arbitrary values supported by TorchScript\n# https://pytorch.org/docs/master/jit.html#supported-type\ncontainer = torch.jit.script(Container(my_values))\ncontainer.save(\"container.pt\")\n")),(0,a.kt)("p",null,"\u5728 C++ \u4e2d\u8bfb\u53d6 tensors"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <torch/script.h>\n\ntorch::jit::script::Module container = torch::jit::load("container.pt");\n\ntorch::Tensor a = container.attr("a").toTensor();\ntorch::Tensor b = container.attr("b").toTensor();\nstd::string c = container.attr("c").toStringRef();\n\nint64_t d = container.attr("d").toInt();\n')),(0,a.kt)("h3",{id:"alternative-use-pickle"},"\u5907\u9009\u65b9\u6848\uff1a\u4f7f\u7528 pickle"),(0,a.kt)("p",null,"\u4e00\u4e2a\u5907\u9009\u65b9\u6848\u662f\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"pickle_save")," \u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"pickle_load")," \u51fd\u6570 (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pytorch/pytorch/blob/v1.9.0/torch/csrc/api/include/torch/serialize.h#L76-L77"},"source"),")\u3002 \u5177\u4f53\u7528\u6cd5\u53ef\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pytorch/pytorch/issues/20356#issuecomment-782341150"},"pytorch/pytorch#20356 \u4e2d\u7684\u8fd9\u4e2a\u8bc4\u8bba"),"\u3002"),(0,a.kt)("h2",{id:"multiple-inputoutput-for-inference"},"\u63a8\u7406\u65f6\u8f93\u5165/\u8f93\u51fa\u591a\u4e2a tensor"),(0,a.kt)("p",null,"\u5047\u8bbe\u6211\u4eec load \u4e86\u4e00\u4e2a\u53eb\u505a ",(0,a.kt)("inlineCode",{parentName:"p"},"module")," \u7684\u6a21\u578b\uff0c\u5e76\u4e14\u5e0c\u671b\u4f7f\u7528\u5b83\u5728 LibTorch \u4e2d\u8fdb\u884c\u63a8\u7406\u3002\u4f46\u662f\uff0c\u8fd9\u4e2a\u6a21\u578b\u9700\u8981\u63a5\u53d7\u591a\u4e2a\u8f93\u5165\u53c2\u6570/\u8f93\u51fa\u591a\u4e2a\u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u4fee\u6539\u81ea ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pytorch/pytorch/issues/18337"},"pytorch/pytorch#18337"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<torch::jit::IValue> inputs;\ninputs.push_back(tensora);\ninputs.push_back(tensorb);\n\nauto outputs = module->forward(inputs).toTuple();\n\ntorch::Tensor out1 = outputs->elements()[0].toTensor();\ntorch::Tensor out2 = outputs->elements()[1].toTensor();\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u6ce8\u610f\uff1a\u5982\u679c\u6a21\u578b\u53ea\u6709\u4e00\u4e2a\u8f93\u51fa\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"forward()")," \u8f93\u51fa\u540e\u76f4\u63a5\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"toTensor()"),"\u3002"))))}l.isMDXComponent=!0}}]);