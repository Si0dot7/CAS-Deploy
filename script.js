function loadPage(path) {
    $('#other-content').load(path, function (response, status, xhr) {
        if (status == "error") {
            $('#other-content').html(`<p style="color:red;">ไม่สามารถโหลดหน้า ${path} ได้</p>`);
        } else {
            // เมื่อโหลดหน้าเสร็จ เช็คว่าหน้าเป็น OverView.html ไหม
            if (path === "/pages/OverView.html") {
                setTimeout(() => {
                    initializeCharts("budgetChart");
                }, 100); // ดีเลย์เล็กน้อยเพื่อให้ Element ถูกสร้างก่อน
            }
          }
    });
  }