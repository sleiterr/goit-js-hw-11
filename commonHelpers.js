(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.getElementById("searchForm").addEventListener("submit",function(i){if(i.preventDefault(),document.getElementById("searchInput").value.trim()===""){alert("Please enter a search query.");return}});const a="44080316-241692617940885c4f90d7de4";document.getElementById("searchForm").addEventListener("submit",function(i){i.preventDefault();const s=document.getElementById("searchInput").value.trim();if(s===""){iziToast.error({title:"Error",message:"Please enter a search query."});return}fetch(`https://pixabay.com/api/?key=${a}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return r.json()}).then(r=>{const e=document.getElementById("results");if(e.innerHTML="",r.hits.length===0){iziToast.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again."});return}r.hits.forEach(t=>{const n=document.createElement("img");n.src=t.webformatURL,n.alt=t.tags,e.appendChild(n)})}).catch(r=>{iziToast.error({title:"Error",message:`There was a problem with the fetch operation: ${r.message}`}),console.error("There was a problem with the fetch operation:",r)})});
//# sourceMappingURL=commonHelpers.js.map
