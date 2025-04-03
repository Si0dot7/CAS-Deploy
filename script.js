function loadPage(path) {
    $('#other-content').load(path, function (response, status, xhr) {
        if (status == "error") {
            $('#other-content').html(`<p style="color:red;">ไม่สามารถโหลดหน้า ${path} ได้</p>`);
        } else {
            
            if (path === "./pages/OverView.html") {
                setTimeout(() => {
                    initializeCharts("budgetChart");
                }, 100); 
            }
          }
    });
  }