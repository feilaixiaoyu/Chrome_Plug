var winid = 0;
var tabid = 0;
chrome.extension.onRequest.addListener(
               function(request,sender,sendResponse){ 
                      chrome.pageAction.show(sender.tab.id);
                      chrome.windows.getCurrent(function(Win){ 
                               winid = Win.id
                      });
                      circle();
            }
);
function circle()
{
         radomURL = "http://bbs.pediy.com/showthread.php?t=" + Math.floor(100000 + Math.random()*6000); 
         chrome.tabs.create({windowId:winid,url: radomURL,selected:false},function(tab){tabid = tab.id}); 
         chrome.tabs.remove(tabid); 
         setTimeout(circle,60000); 
}